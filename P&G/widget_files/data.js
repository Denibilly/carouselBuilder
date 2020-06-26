(function (ns) {

    var cards = {
        Flash_Bathroom_Spray_500Ml: createItem("Flash Bathroom Spray 500Ml", "1.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/121/images/388/snapshotimagehandler_652898919__77550.1592216836.386.513.jpg?c=1&_ga=2.191836778.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Flash_Kitchen_Degreaser_500Ml: createItem("Flash Kitchen Degreaser 500Ml", "1.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/120/images/385/snapshotimagehandler_1338759484__89714.1592216726.386.513.jpg?c=1&_ga=2.254621256.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Ariel_Powder_40_Wash: createItem("Ariel Powder 40 Wash", "4.20£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.221058904.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Lenor_Unstoppables_Fresh_570g_In_Wash: createItem("Lenor Unstoppables Fresh 570g, In-Wash Scent Booster Beads", "8.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/118/images/383/Unstoppables_fresh_570__56247.1589699886.386.513.JPG?c=1&_ga=2.196098796.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Lenor_Unstoppables_Spring_570g_In_Wash: createItem("Lenor Unstoppables Spring 570g, In-Wash Scent Booster Beads", "8.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/117/images/382/Unstoppables_spring__09644.1589699428.386.513.JPG?c=1&_ga=2.196098796.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Fairy_Non_Bio_Sensitive_skin_38_wash: createItem("Fairy Non-Bio Sensitive skin 38 wash", "5.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/116/images/381/Fairy_non_bio_liquid_38__58185.1589699178.386.513.JPG?c=1&_ga=2.30872447.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Fairy_Anti_Bacterial_washing_up_liquid_385ml: createItem("Fairy Anti-Bacterial washing up liquid 385ml", "2.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/115/images/380/Antiback_24__71021.1589463795.386.513.JPG?c=1&_ga=2.30872447.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        WifiPlug: createItem("WifiPlug", "0.00£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/114/images/378/wifiplug_product__29341.1589463338.386.513.png?c=1&_ga=2.259013322.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Ariel_38_Washes: createItem("Ariel Liquid 38 Washes", "4.99£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/113/images/377/Liquid_38_ct__40923.1578499065.386.513.JPG?c=1&_ga=2.261722379.745026056.1592829572-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),
        Ariel_Professional_Powder_130_Washes: createItem("Ariel Professional Powder 130 Washes", "13.99£", "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/112/images/376/Ariel_pro_130_box__53519.1578497225.386.513.JPG?c=1&_ga=2.259013322.1114480669.1593081514-676957727.1592829572", "https://store-p2nnk39lo2.mybigcommerce.com/"),

        carousel_2_items: {
            title: "Carousel 2 items",
            content: {"type":"carousel","padding":10,"elements":[
                {"type": "vertical","elements": [{"type": "image","url": "https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/113/images/377/Liquid_38_ct__40923.1578499065.386.513.JPG?c=1&_ga=2.261722379.745026056.1592829572-676957727.1592829572","tooltip": ""},{"type":"text","text":"Ariel Liquid 38 Washes","tooltip":"Ariel Liquid 38 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.99£","tooltip":"4.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.156867261.745026056.1592829572-676957727.1592829572","tooltip": ""},{"type":"text","text":"Ariel Powder 40 Wash","tooltip":"Ariel Powder 40 Wash","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.20£","tooltip":"4.20","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]}
            ]}
        },
        carousel_products: {
            title: "Carousel all products",
            content: {"type":"carousel","padding":10,"elements":[
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/113/images/377/Liquid_38_ct__40923.1578499065.386.513.JPG?c=1&_ga=2.261722379.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Liquid 38 Washes","tooltip":"Ariel Liquid 38 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.99£","tooltip":"4.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.156867261.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Powder 40 Wash","tooltip":"Ariel Powder 40 Wash","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.20£","tooltip":"4.20","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/112/images/376/Ariel_pro_130_box__53519.1578497225.386.513.JPG?c=1&_ga=2.136205239.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Professional Powder 130 Washes","tooltip":"Ariel Professional Powder 130 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"13.99£","tooltip":"13.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/114/images/378/wifiplug_product__29341.1589463338.386.513.png?c=1&_ga=2.166810552.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"WifiPlug","tooltip":"WifiPlug","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"0.00£","tooltip":"0.00","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]}
            ]}
        }
    };

    function createItem(product, price, imageURL, storeURL){
        var res = {
            title: product,
            content: {"type": "vertical","elements": [{"type": "image","url": imageURL,"tooltip": ""},{"type":"text","text":product,"tooltip":product,"rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":price,"tooltip":price,"rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":storeURL}]}}]}
        };
        return res;
    }
    var metadata = [
        {
            "type": "ExternalId",
            "id": "123456789"
        }
    ];

    ns.data = {
        cards: cards,
        metadata: metadata
    };

})(window.structuredContentWidget = window.structuredContentWidget || {});
