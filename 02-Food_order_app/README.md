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

# For optimizing app we want to create separate bundling of .js files so that is called

    -Chunking
    -Code Spliting
    -Dynemic Bundling
    -lazy loading
    -on demand loading
    -dynamix import

# How to import lazy loading

    -import {lazy} from "react";

    -const Grocery = lazy(() =>
        import("./component/Grocery");
    )

    -<Suspense fallback={<h1>Loading...</h1>}>
        <Grocery/>
    </Suspense>

# Redux Toolkit
    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -Connect our store to our app
    -Create Slice 
    -Dispatch(action)
    -Selector

# Types of testing (developer)
    -Unit testing
    -Integration testing
    -End to End testing - e2e testing

# Setting up testing in our app
    -Install react testing library
    -Installed jest
    -Installed babel dependencies
    -Configure babel
    -Configure parcel config file to disable default babel transpilation
    -Jest Configuration
    -Install jsdom library
