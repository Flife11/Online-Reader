import Header from "./Header";
import SiderBar from "./SiderBar";

function DefaultLayout({children}) {
    return <div>
        <Header/>
        <div className="container">
            <div className="content">{children}</div>
        </div>
    </div>;
}

export default DefaultLayout;