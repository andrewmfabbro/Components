import useNavigation from "../hooks/use-navigation";

function Route ({path, children}) {
    const {currentPath} = useNavigation(); //nav hook

    if(path === currentPath) {
        return children;
    }
    return null;
}

export default Route;