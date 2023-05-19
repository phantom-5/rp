import { ReactNode, useState, lazy, Suspense } from "react"
import Card from "../../../shared/Card"
//const ComponentA = lazy(() => import('./A')) actual

const ComponentA = lazy(()=>{
    return Promise.all([
        import('./A'),
        new Promise(resolve=>setTimeout(resolve,3000))
    ]).then(([exports])=>exports)
})  // deliberate delay






const CodeSplittingMain = () => {
    const [showDynamicJSX, setShowDynamicJSX] = useState<JSX.Element>(<></>)
    const [showLazyCmp, setShowLazyCmp] = useState<boolean>(false)
    const [nextPage,setNextPage] = useState(false)

    const loadStuffDyn = () => {
        import('./math').then((math) => {
            console.log('CodeSplittingMain', 'Module Loaded Dynamic Import')
            setShowDynamicJSX(<div className='lead'>{math.add(5, 10)}</div>)
        })
    }

    const PAGE2 = () => {
        return (
            <>
             <div className="demo-box">
                <div className="lead">Error Boundaries</div>
                <code>If the other module fails to load (for example, due to network failure), it will trigger an error. You can handle these errors to show a nice user experience and manage recovery with Error Boundaries. Once you’ve created your Error Boundary, you can use it anywhere above your lazy components to display an error state when there’s a network error.</code>
            </div>
            <div className="demo-box">
                <div className="lead">Route Based Splitting</div>
                <code>Deciding where in your app to introduce code splitting can be a bit tricky. You want to make sure you choose places that will split bundles evenly, but won’t disrupt the user experience. A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time.</code><br/>
            <div className="lead">Or, Just use NextJS</div>
            </div>
            </>
        )
    }

    if(!nextPage){
    return (
        <>
        <div className="demo-container">
            <Card title="Code Splitting" subtext="lazy" description="Most React apps will have their files “bundled” using tools like Webpack, Rollup or Browserify. Bundling is the process of following imported files and merging them into a single file: a “bundle”. This bundle can then be included on a webpage to load an entire app at once. f you’re using Create React App, Next.js, Gatsby, or a similar tool, you will have a Webpack setup out of the box to bundle your app. Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load. To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime. Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load. The best way to introduce code-splitting into your app is through the dynamic import() syntax. The React.lazy function lets you render a dynamic import as a regular component." />
            <div className="demo-box">
                <>
                    <div className="lead">Using Dynamic Import</div>
                    <code>Check console for Module Loaded Dynamic and press button</code>
                    <button className="btn btn-sm btn-outline-dark" onClick={() => { loadStuffDyn() }}>Load a function and return JSX</button><br />
                    {showDynamicJSX}
                    <code>We can use dynamic import for normal modules to import functions etc. but it can't be used on React Components</code><br /><br />
                    <div className="lead">React Lazy for Components</div>
                    <code>The first time you press button it will show a suspenseḍ as it will dynamically load. There is a deliberate delay of 3s in added in code.</code><br/>
                    <button className="btn btn-sm btn-outline-dark" onClick={() => { setShowLazyCmp(true) }}>Load a function and return JSX</button>
                    {showLazyCmp &&
                        <Suspense fallback={<div>Loading...</div>}>
                            <ComponentA />
                        </Suspense>
                    }
                </>
            </div>
            <div className="demo-box">
                <div className="lead">Named Exports</div>
                <code>React.lazy currently only supports default exports. If the module you want to import uses named exports, you can create an intermediate module that reexports it as the default. This ensures that tree shaking keeps working and that you don't pull in unused components.</code>
            </div>
            <div className="demo-box">
                <div className="lead">Suspsense Intro</div>
                <code>The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load. The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.</code>
            </div>
            <div className="demo-box">
                <div className="lead">startTransition Intro</div>
                <code>In this example, if tab gets changed from 'photos' to 'comments', but Comments suspends, the user will see a glimmer. This makes sense because the user no longer wants to see Photos, the Comments component is not ready to render anything, and React needs to keep the user experience consistent, so it has no choice but to show the Glimmer above. However, sometimes this user experience is not desirable. In particular, it is sometimes better to show the “old” UI while the new UI is being prepared. You can use the new startTransition API. Here, you tell React that setting tab to 'comments' is not an urgent update, but is a transition that may take some time. React will then keep the old UI in place and interactive, and will switch to showing {'<Comments />'} when it is ready.</code>
            </div>
        </div>
        <div className="text-center"><span className='lead' style={{cursor:'pointer', position:'absolute', right:'16px', top:'16px'}} onClick={()=>{setNextPage(true)}}>Next Page</span></div>
        </>
    )}
    else {
        return (
            <>
            <div className="demo-container">
                <PAGE2/>
            </div>
            <div className="text-center"><span className='lead' style={{cursor:'pointer', position:'absolute', right:'16px', top:'16px'}}  onClick={()=>{setNextPage(false)}}>Previous Page</span></div>
            </>
        )
    }
}

export default CodeSplittingMain