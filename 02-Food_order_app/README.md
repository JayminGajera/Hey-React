
# Two Types of export/import
    
    -Default export/import
            export default component;
            import component from '/path'

    -Named export/import
            export const component;
            import {component} from '/path';


# Class base component life cycle method

    -MOUNTING 
        constructor(dummy)
        Render(dummy)
        <HTML Dummy>
        ComponentDidMount()
        <API Call>
        <this.setState> -> State variable is updated

    -UPDATE 
        Render(API data)
        <HTML (new data)>

        ComponentDidUpdate()