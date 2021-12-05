 export default function Tab1 (props) {
     return <div >
         <div>trang thai</div>
         <div>ten</div>
         <div>trang thai</div>
         <div>trang thai</div>
         <div>trang thai</div>
         {
             (props.type === 2 || props.type === 1) &&
             <div onClick={()=> {
                 props.delete(1)
             }}>huy hang</div>
         }
     </div>
 }