import React, {Suspense} from "react";
import Loading from "../components/common/Conponents/Loading";

export function withSuspense<WCP>(WrappedComponent:React.ComponentType<WCP>) {
    return (props:WCP) => {
        return <Suspense fallback={<Loading/>}>
            <WrappedComponent{...props}/>
        </Suspense>
    }
};
