export default async function handler(req, res) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  if (req.method === "POST") {
    try {
      const { cartItems, totalAfterDiscount } = req.body;

      if (!cartItems || !Array.isArray(cartItems)) {
        return res.status(400).json({ error: "Cart items are required" });
      }

      const subtotal = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      );
      const totalAmount = totalAfterDiscount && totalAfterDiscount > 0
        ? Math.round(totalAfterDiscount * 100)
        : Math.round(subtotal * 100)

      // Create a single line item showing cart details
      const lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Your Cart",
              description: cartItems
                .map((item) => `${item.title} (x${item.quantity})`)
                .join(", "),
            },
            unit_amount: totalAmount,
          },
          quantity: 1,
        },
      ];

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      res.status(200).json({ sessionId: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}
