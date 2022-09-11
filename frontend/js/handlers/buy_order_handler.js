import { buyOrder } from "../buy-order.js"


var stripe = Stripe("pk_test_51LgizyBBMFXKIQ1UfhBSkURslV8n8f2ddmLajUVSPRYRiLwKEn2VCVJncDbsPhzba6rrHbxZk3xuWVxpAsk4zCLC00VtXyv2MV");


let buyOrderButtonNode = document.querySelector('.buy-order-button')


buyOrderButtonNode.addEventListener('click', handleBuyOrder)


async function handleBuyOrder(event){
    if (event.target.tagName != 'BUTTON'){
        return
    }

    try {
        const stripSessionId = await buyOrder()
        stripe.redirectToCheckout({"sessionId":stripSessionId})
    } catch (error) {
        console.log(error)
    }

}