import Link from "next/link";

function Breadcumb({toPage, }) {
    return ( 
        // <!-- ======= Breadcrumbs ======= -->
        <div className="breadcrumbs p-5">
          <div className="container">
    
            <div className="d-flex justify-content-between align-items-center">
              <h2> {toPage} </h2>
              <ol>
                <li><Link href="/">Home</Link></li>
                <li> {toPage} </li>
              </ol>
            </div>
    
          </div>
        </div>
     );
}

export default Breadcumb;