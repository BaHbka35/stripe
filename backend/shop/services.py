from django.conf import settings

import stripe


class StripeService:

    @staticmethod
    def get_stripe_session(order_price: int):
        stripe.api_key = settings.STRIPE_KEY
        stripe_session = stripe.checkout.Session.create(
            line_items=[{
                'price_data': {
                    'currency': 'rub',
                    'product_data': {
                        'name': 'Items',
                    },
                    'unit_amount': int(str(order_price) + "00"),
                },
                'quantity': 1,
            }],
            mode='payment',
            cancel_url=settings.CANCEL_STRIPE_URL,
            success_url=settings.SUCCESS_STRIPE_URL,
        )
        return stripe_session
