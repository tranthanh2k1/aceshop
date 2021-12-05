import Tab1 from "./Tab1Template"
import Tab2 from "./Tab2Template"

export default function ExampleTemplate(props) {
    const data = props.data ? props.data : []
     return <div>
         {/* tab */}
    
         <div className="d-flex">
             <div onClick={()=>{
                 props.onChangeTab(1)
             }} className={props.tab === 1 ? "tab-selected" : "tab"}>1</div>
             <div onClick={()=>{
                 props.onChangeTab(2)
             }} className={props.tab === 2 ? "tab-selected" : "tab"}>2</div>
         </div>
         {/* content */}
         <div className="content">
                {
                  props.tab === 1 && <Tab1 data={props.data} type={props.tab}/>
                }
              
               
         </div>
     </div>
}