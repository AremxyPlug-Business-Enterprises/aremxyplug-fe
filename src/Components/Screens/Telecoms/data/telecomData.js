
import mobileAirtimeImg from "../telecomImages/airTimeTopUp.svg";
import dataBundleImg from "../telecomImages/dataBundle.svg"
import educationPinsImg from "../telecomImages/educationPins.svg";
import tvSubscriptionImg from "../telecomImages/tvSubscription.svg";
import electricity from "../telecomImages/electricBills.svg";
import airtimeConversionImg from "../telecomImages/airTimeConversion.svg";
import BulkSmsImg from "../telecomImages/bulkSms.svg";
import rechargeCardPrinting from "../telecomImages/rechargeCardPrinting.svg"





export const mobileData = [
    {
        id:1,
        title: 'Airtime Top up' , 
        image: mobileAirtimeImg,
        message: "With just a few clicks. Never run out of airtime. simply top up your phone online from the comfort of your home.", 
        image_name: 'airTimeTopUp'
    },
    {
        id:2,
        title: 'Data Bundle' , 
        image: dataBundleImg,
        message: "Our Data Bundles service has got you covered with flexible plans to suit your needs and stream like never before!", 
        image_name: 'dataBundle'
    },
    {
        id:3,
        title: 'Education Pins' , 
        image: educationPinsImg,
        message: "With our Education Pins service, you can access your exam results in just a few clicks.", 
        image_name: 'educationPins'
    },
    {
        id:4,
        title: 'TV Subscription' , 
        image: tvSubscriptionImg,
        message: "Enjoy unlimited streaming on multiple channels. Sign up now and never miss your favorite show again!", 
        image_name: 'tvSubscription'
    },
    {
        id:5,
        title: 'Electricity Bills' , 
        image: electricity,
        message: "Keep track of your bills and make sure you never miss a payment. Try our bills payment service right away to make life easier.", 
        image_name: 'electricBills'
    },
    {
        id:6,
        title: 'Airtime Conversion' , 
        image: airtimeConversionImg,
        message: "You can quickly convert your bulk airtime to get cash to your wallet or bank account in just  few minutes.", 
        image_name: 'airTimeConversion'
    },
    {
        id:7,
        title: 'Bulk SMS' , 
        image: BulkSmsImg,
        message: "Try our bulk SMS service now and take your communication to the next level.", 
        image_name: 'bulkSms'
    },
    {
        id:8,
        title: 'Recharge Card Printing' , 
        image: rechargeCardPrinting,
        message: "Try our RCP service today, print recharge cards with your business name and make a resell without any hassle.", 
        image_name: 'rechargeCardPrinting'
    },
];

export const desktopData = [
    {
        id:1,
        rows: [
            {
                title: "Airtime TopUp", 
                image: mobileAirtimeImg,
                message: "With just a few clicks. Never run out of airtime. simply top up your phone online from the comfort of your home.", 
                image_name: 'airTimeTopUp'
            },
            {
                title: 'Data Bundle' , 
                image: dataBundleImg,
                message: "Our Data Bundles service has got you covered with flexible plans to suit your needs and stream like never before!", 
                image_name: 'dataBundle'
            },
        ]
    },
    {
        id:2,
        rows: [
            {
                title: 'Education Pins' , 
                image: educationPinsImg,
                message: "With our Education Pins service, you can access your exam results in just a few clicks.", 
                image_name: 'educationPins'
            },
            {
                title: 'TV Subscription' , 
                image: tvSubscriptionImg,
                message: "Enjoy unlimited streaming on multiple channels. Sign up now and never miss your favorite show again!", 
                image_name: 'tvSubscription'
            },
        ]
    },
    {
        id:3,
        rows: [
            {
                title: 'Electricity Bills' , 
                image: electricity,
                message: "Keep track of your bills and make sure you never miss a payment. Try our bills payment service right away to make life easier.", 
                image_name: 'electricBills'
            },
            {
                title: 'Airtime Conversion' , 
                image: airtimeConversionImg,
                message: "You can quickly convert your bulk airtime to get cash to your wallet or bank account in just  few minutes.", 
                image_name: 'airTimeConversion'
            },
        ]
    },
    {
        id:4,
        rows: [
            {
                title: 'Bulk SMS' , 
                image: BulkSmsImg,
                message: "Try our bulk SMS service now and take your communication to the next level.", 
                image_name: 'bulkSms'
            },
            {
                title: 'Recharge Card Printing' , 
                image: rechargeCardPrinting,
                message: "Try our RCP service today, print recharge cards with your business name and make a resell without any hassle.", 
                image_name: 'rechargeCardPrinting'
            },
        ]
    }
]