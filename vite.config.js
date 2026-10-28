import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { bunny } from 'laravel-vite-plugin/fonts';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.scss',
                'resources/js/app.js',



                //////////////////////////////////////////////////
                // Client
                '/public/resources/css/client/client-login.scss',
                '/public/resources/css/client/home-page.scss',
                '/public/resources/css/client/prod-category.scss',
                '/public/resources/css/client/prod-listing.scss',
                '/public/resources/css/client/my-account.scss',
                '/public/resources/css/client/premio-page.scss',
                '/public/resources/css/client/cards-page.scss',
                '/public/resources/css/client/orders-page.scss',
                '/public/resources/css/client/returns-page.scss',
                '/public/resources/css/client/reviews-page.scss',
                '/public/resources/css/client/addresses-page.scss',
                '/public/resources/css/client/invoices-page.scss',
                '/public/resources/css/client/checkout-page.scss',



                //////////////////////////////////////////////////
                // Common
                '/public/resources/css/seller/seller-login.scss',
                '/public/resources/css/common/variables.scss',
                '/public/resources/css/common/_components.scss',
                '/public/resources/components/css/header-footer-seller.scss',
                '/public/resources/components/css/header-footer-client.scss',
                '/public/resources/components/css/dynamic-seller-page-view.scss',
                '/public/resources/components/css/client-account-side-menu.scss',



                //////////////////////////////////////////////////
                // Seller
                '/public/resources/css/seller/academy.scss',
                '/public/resources/css/seller/dashboard.scss',
                '/public/resources/css/seller/importXLS.scss',
                '/public/resources/css/seller/notifications.scss',
                '/public/resources/css/seller/seller-login.scss',
                    // Account
                    '/public/resources/css/seller/account/documents.scss',
                    '/public/resources/css/seller/account/newsletters.scss',
                    '/public/resources/css/seller/account/profile.scss',
                    '/public/resources/css/seller/account/rating.scss',
                    // ADS
                    '/public/resources/css/seller/ads/campaigns.scss',
                    '/public/resources/css/seller/ads/credits.scss',
                    '/public/resources/css/seller/ads/interest.scss',
                    // Campaigns
                    '/public/resources/css/seller/campaigns/bundles.scss',
                    '/public/resources/css/seller/campaigns/campaigns.scss',
                    // Financial
                    '/public/resources/css/seller/financial/documents.scss',
                    '/public/resources/css/seller/financial/invoices.scss',
                    '/public/resources/css/seller/financial/payouts.scss',
                    '/public/resources/css/seller/financial/statement.scss',
                    // Fulfillment
                    '/public/resources/css/seller/fulfillment/calculator.scss',
                    '/public/resources/css/seller/fulfillment/dashboard.scss',
                    '/public/resources/css/seller/fulfillment/reception.scss',
                    // Logistics
                    '/public/resources/css/seller/logistics/courier-accounts.scss',
                    '/public/resources/css/seller/logistics/my-deliveries.scss',
                    '/public/resources/css/seller/logistics/shipping-tax.scss',
                    // Messages
                    '/public/resources/css/seller/messages/contact.scss',
                    '/public/resources/css/seller/messages/messages.scss',
                    // Offers
                    '/public/resources/css/seller/offers/general.scss',
                    '/public/resources/css/seller/offers/prices.scss',
                    '/public/resources/css/seller/offers/reviews.scss',
                    '/public/resources/css/seller/offers/stocks.scss',
                    // Opportunities
                    '/public/resources/css/seller/opportunities/existing-products.scss',
                    // Orders
                    '/public/resources/css/seller/orders/orders.scss',
                    // Products
                    '/public/resources/css/seller/products/add-products.scss',
                    '/public/resources/css/seller/products/my-products.scss',
                    // Returns
                    '/public/resources/css/seller/returns/product-health.scss',
                    '/public/resources/css/seller/returns/returns.scss',
            ],
            refresh: true,
            fonts: [
                bunny('Instrument Sans', {
                    weights: [400, 500, 600],
                }),
            ],
        }),
        tailwindcss(),
    ],
    server: {
        host: '0.0.0.0',
        cors: true,
        hmr: {
            host: '192.168.1.166',
        },
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
