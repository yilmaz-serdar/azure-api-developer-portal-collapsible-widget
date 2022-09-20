# Azure API Developer Portal Collapsible Widget
Azure API Developer Portalde drop-down paneller oluşturabilmek için kullanılabilecek custom widget. FAQ ve benzeri sayfalar hazırlanırken kullanılabilir. 

<img src="/images/collapsible-widget.png" width=55%>

## Widget'ı projeye nasıl ekleyebilirim?
**collapsible** klasörü, portal projesinde **community/widgets** klasörü içerisine kopyalanır ve **src** klasörü içerisinde yer alan design, publish ve runtime modüllerine bind edilir. 

**src/apim.design.module.ts**
``` 
import { CollapsibleModule } from "../community/widgets/collapsible/collapsible.module";
import { CollapsibleDesignModule } from "../community/widgets/collapsible/collapsible.design.module";
    
...

     injector.bindModule(new CollapsibleModule());
     injector.bindModule(new CollapsibleDesignModule());

```

**src/apim.publish.module.ts**
``` 
import { CollapsibleModule } from "../community/widgets/collapsible/collapsible.module";

...

     injector.bindModule(new CollapsibleModule());

```

**src/apim.runtime.module.ts**
``` 
import { Collapsible } from "../community/widgets/collapsible/ko/runtime/collapsible";

...

     injector.bind("collapsible", Collapsible);

```

## Widget'ı nasıl kullanabilirim? 
**Add Widget** panelinden **Collapsible: Basic** widget'ı seçilerek sayfaya eklenir. <br/>
![Add Collapsible Widget](/images/add-collapsible-widget.png) <br/>
Widget paneli açılarak başlık ve açıklama bilgileri girilir. <br/>
<img src="/images/add-section.png" width=60%>  <br/>
