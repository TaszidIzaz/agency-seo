export async function generateMetadata(){
    // SEO DATA FETCH
    return{
        title:"Projects",
    }
}
const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;