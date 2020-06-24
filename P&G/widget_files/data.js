(function (ns) {

    var cards = {
        carousel_products: {
            title: "Carousel all products",
            content: {"type":"carousel","padding":10,"elements":[
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/113/images/377/Liquid_38_ct__40923.1578499065.386.513.JPG?c=1&_ga=2.261722379.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Liquid 38 Washes","tooltip":"Ariel Liquid 38 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.99£","tooltip":"4.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.156867261.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Powder 40 Wash","tooltip":"Ariel Powder 40 Wash","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.20£","tooltip":"4.20","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/112/images/376/Ariel_pro_130_box__53519.1578497225.386.513.JPG?c=1&_ga=2.136205239.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Professional Powder 130 Washes","tooltip":"Ariel Professional Powder 130 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"13.99£","tooltip":"13.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/114/images/378/wifiplug_product__29341.1589463338.386.513.png?c=1&_ga=2.166810552.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"WifiPlug","tooltip":"WifiPlug","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"0.00£","tooltip":"0.00","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]}
            ]}
        },
        carousel_1_item: {
            title: "Carousel 1 item",
            content: {"type":"carousel","padding":10,"elements":[
                
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.156867261.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Powder 40 Wash","tooltip":"Ariel Powder 40 Wash","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.20£","tooltip":"4.20","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]}
            ]}
        },
        carousel_2_items: {
            title: "Carousel 2 items",
            content: {"type":"carousel","padding":10,"elements":[
                
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/113/images/377/Liquid_38_ct__40923.1578499065.386.513.JPG?c=1&_ga=2.261722379.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Liquid 38 Washes","tooltip":"Ariel Liquid 38 Washes","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.99£","tooltip":"4.99","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]},

                {"type":"vertical","elements":[{"type":"image","url":"https://cdn11.bigcommerce.com/s-p2nnk39lo2/products/119/images/384/Ariel_powder_40_ct_5GBP__56053.1590486909.386.513.JPG?c=1&_ga=2.156867261.745026056.1592829572-676957727.1592829572","tooltip":"",},{"type":"text","text":"Ariel Powder 40 Wash","tooltip":"Ariel Powder 40 Wash","rtl":false,"style":{"bold":false,"italic":false,"color":"#000000"}},{"type":"text","text":"4.20£","tooltip":"4.20","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Buy product","title":"Buy product","click":{"actions":[{"type":"link","name":"Add to cart","uri":"https://store-p2nnk39lo2.mybigcommerce.com/"}]}}]}
            ]}
        },
        carousel_images_only: {
            title: "Carousel images only",
            content: {"type":"carousel","padding":10,"elements":[
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},{"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]}]}
        },
        carousel_vh: {
            title: "Carousel mixed layouts",
            content: {"type":"carousel","padding":10,"elements":[
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},
                
                {"type":"horizontal","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},
                
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]}]}        
        },
        carousel_1_el: {
            title: "Carousel with single element",
            content: {"type":"carousel","padding":10,"elements":[
                
                {"type":"vertical","elements":[{"type":"image","url":"http://cdn.mos.cms.futurecdn.net/vkrEdZXgwP2vFa6AEQLF7f-480-80.jpg?quality=98&strip=all","tooltip":"image tooltip","click":{"metadata":[{"type":"ExternalId","id":"11114444"}],"actions":[{"type":"publishText","text":"YADA YADA"}]}},{"type":"text","text":"product name","tooltip":"text tooltip","style":{"bold":true,"size":"large"}},{"type":"text","text":"product name","tooltip":"text tooltip"},{"type":"button","tooltip":"button tooltip","title":"Add to cart","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}},
                
                {"type":"horizontal","elements":[{"type":"button","title":"Buy","tooltip":"Buy this product","click":{"actions":[{"type":"link","name":"Buy","uri":"http://www.google.com"},{"type":"publishText","text":"YADA YADA"}]}},{"type":"button","title":"Find similar","tooltip":"store is the thing","click":{"metadata":[{"type":"ExternalId","id":"11112222"}],"actions":[{"type":"link","name":"Buy","uri":"http://www.google.com"}]}}]},{"type":"button","tooltip":"button tooltip","title":"Publish text","click":{"metadata":[{"type":"ExternalId","id":"22223333"}],"actions":[{"type":"publishText","text":"my text"}]}},{"type":"button","tooltip":"button tooltip","title":"Navigate","click":{"metadata":[{"type":"ExternalId","id":"12345678"}],"actions":[{"type":"publishText","text":"my text"},{"type":"navigate","name":"Navigate to store via image","lo":34.88248,"la":32.19777}]}}]}]}
        },
        carousel_element_order: {
            title: "Carousel elements order",
            content: {"type":"carousel","padding":10,"elements":[
                
                {"type":"vertical","elements":[{"type":"text","text":"Small plan 2 GB data ","tooltip":"Small plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"500$ national talk","tooltip":"500$","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"49$ per month","tooltip":"49$","rtl":false,"style":{"bold":true,"italic":true,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}},{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/7289E842-10A3-40C3-B4A7-F1856B574CD0.png","tooltip":"SIM only plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}}]},
                
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/CF63C36C-CF8E-4AA5-9376-BC89EDAE43B7.png","tooltip":"Swap plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Medium plan 15GB data","tooltip":"Medium plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"Unlimited national talk","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"69$ per month","tooltip":"Unlimited","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Buy now","title":"Buy now","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]},
                
                {"type":"vertical","elements":[{"type":"image","url":"https://cdn.zeplin.io/5aa650d695bfea607a2c9351/assets/D767223B-CC51-431A-A26E-B54C39EA7846.png","tooltip":"Large plan","click":{"metadata":[{"type":"ExternalId","id":"11114444"}]}},{"type":"text","text":"Large plan 20GB data","tooltip":"Large plan","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"text","text":"unlimited international talk","tooltip":"unlimited international","rtl":false,"style":{"bold":true,"italic":false,"color":"#000000"}},{"type":"button","tooltip":"Choose a plan","title":"Choose a plan","click":{"actions":[{"type":"link","name":"Add to cart","uri":"http://www.google.com"}]}}]}]}
        }
    };

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
