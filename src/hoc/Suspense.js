import React, {Suspense} from "react";
import Loading from "../components/common/Conponents/Loading";

const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Loading/>}>
            <Component{...props}/>
        </Suspense>
    }
};

export default withSuspense