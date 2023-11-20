
# What Will Parcel Do?
    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement
    - File Watching Algorithm - written in C++
    - Image Optimization
    - Minification 
    - Bundling
    - Compressing
    - Consistent Hashing
    - Code Splitting
    - Differencial Bundling - support older browsers
    - Diagnostic
    - Error Handling
    - HTTPs - provide which testing
    - Tree Shaking - remove unused code
    - Different dev and prod bundles


#Two Types of export/import
    
    -Default export/import
            export default component;
            import component from '/path'

    -Named export/import
            export const component;
            import {component} from '/path';


#Class base component life cycle method

----- MOUNTING -----
constructor(dummy)
Render(dummy)
    <HTML Dummy>
ComponentDidMount
    <API Call>
    <this.setState> -> State variable is updated

----- UPDATE -----
Render(API data)
<HTML (new data)>

ComponentDidUpdate