import Accessibility from "../components/AdvancedConcepts/Accessibility";
import CodeSplittingMain from "../components/AdvancedConcepts/CodeSplitting/CodeSplittingMain";
import Context from "../components/AdvancedConcepts/Context";
import ErrroBoundaries from "../components/AdvancedConcepts/ErrorBoundaries";
import BasicKeywords from "../components/BasicConcepts/BasicKeywords";
import ComponentPropsParent from "../components/BasicConcepts/ComponentProps";
import Composition from "../components/BasicConcepts/Composition";
import ConditionalRender from "../components/BasicConcepts/ConditionalRender";
import Forms from "../components/BasicConcepts/Forms";
import FunctionVCmp from "../components/BasicConcepts/FunctionVCmp";
import HandlingEvents from "../components/BasicConcepts/HandlingEvents";
import JSXDemo from "../components/BasicConcepts/JSXDemo";
import LiftingState from "../components/BasicConcepts/LiftingState";
import ListKeys from "../components/BasicConcepts/ListKeys";
import RenderingElementDemo from "../components/BasicConcepts/RenderingElementDemo";
import StateLife from "../components/BasicConcepts/StateLife";
import ReactHistory from "../components/Introduction/ReactHistory";
import StartingReact from "../components/Introduction/StartingReact";
import ThinkinginReact from "../components/Introduction/ThinkinginReact";
import { INDEXDATAITEM } from './TYPES';
import FRMain from '../components/AdvancedConcepts/FowardingRefs/FRMain';
import Fragments from '../components/AdvancedConcepts/Fragments';
import HOC from "../components/AdvancedConcepts/HOC/HOC";
import OptimisingPerformance from "../components/AdvancedConcepts/OptimisingPerformance";
import Portals from "../components/AdvancedConcepts/Portals";
import ProfilerCmp from "../components/AdvancedConcepts/ProfilerCmp";
import RenderProp from "../components/AdvancedConcepts/RenderProp";
import Reconciliation from "../components/AdvancedConcepts/Reconciliation";
import RefsDOM from '../components/AdvancedConcepts/RefsDOM';
import StrictMode from "../components/AdvancedConcepts/StrictMode";
import SuspenseCmp from "../components/AdvancedConcepts/Suspense";
import UseState from '../components/Hooks/UseState/UseState';
import UseEffect from "../components/Hooks/UseEffect/UseEffect";
import UseRef from "../components/Hooks/UseRef";
import UseLayoutEffect from "../components/Hooks/UseLayoutEffect";
import UseReducer from "../components/Hooks/UseReducer";
import UseContext from "../components/Hooks/UseContext";
import UseCallback from "../components/Hooks/UseCallback/UseCallback";
import UseMemo from "../components/Hooks/UseMemo/UseMemo";
import UseImperativeHandle from '../components/Hooks/UseImperativeHandle/UseImperativeHandle';
import UseDeferredValue from "../components/Hooks/UseDeferredValue/UseDeferredValue";
import UseTransition from "../components/Hooks/UseTranisiton/UseTransition";
import UseId from "../components/Hooks/UseId";
import UseDebugValue from "../components/Hooks/UseDebugValue";

let COUNT = 0

export const INDEXDATA: INDEXDATAITEM[] = [
    {
        id: 'intro' + (COUNT++),
        title: 'Starting a React Project',
        category: 'Introduction',
        component: <StartingReact />
    },
    {
        id: 'intro' + (COUNT++),
        title: 'Thinking in React',
        category: 'Introduction',
        component: <ThinkinginReact />
    },
    {
        id: 'intro' + (COUNT++),
        title: 'History of React',
        category: 'Introduction',
        component: <ReactHistory />
    },
    {
        id: 'basic' + (COUNT++),
        title: 'JSX',
        category: 'Basic Concepts',
        component: <JSXDemo />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Rendering Elements',
        category: 'Basic Concepts',
        component: <RenderingElementDemo />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Components and Props',
        category: 'Basic Concepts',
        component: <ComponentPropsParent />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'State & Life Cycle of a Component',
        category: 'Basic Concepts',
        component: <StateLife />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Handling Events',
        category: 'Basic Concepts',
        component: <HandlingEvents />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Conditional Rendering',
        category: 'Basic Concepts',
        component: <ConditionalRender />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Lists and Keys',
        category: 'Basic Concepts',
        component: <ListKeys />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Forms',
        category: 'Basic Concepts',
        component: <Forms />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Lifting State Up',
        category: 'Basic Concepts',
        component: <LiftingState />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Composition vs Inheritance',
        category: 'Basic Concepts',
        component: <Composition />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Calling Function vs Component',
        category: 'Basic Concepts',
        component: <FunctionVCmp />,
    },
    {
        id: 'basic' + (COUNT++),
        title: 'Terms, Keywords & Others',
        category: 'Basic Concepts',
        component: <BasicKeywords />,
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Accessibility',
        category: 'Advanced Concepts',
        component: <Accessibility />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Code Splitting',
        category: 'Advanced Concepts',
        component: <CodeSplittingMain />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Context',
        category: 'Advanced Concepts',
        component: <Context />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Error Boundaries',
        category: 'Advanced Concepts',
        component: <ErrroBoundaries />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Foward Refs',
        category: 'Advanced Concepts',
        component: <FRMain />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Fragment',
        category: 'Advanced Concepts',
        component: <Fragments />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Higher Order Components',
        category: 'Advanced Concepts',
        component: <HOC />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Optimising Performance',
        category: 'Advanced Concepts',
        component: <OptimisingPerformance />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Portals',
        category: 'Advanced Concepts',
        component: <Portals />
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Profiler',
        category: 'Advanced Concepts',
        component: <ProfilerCmp/>
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Render Props',
        category: 'Advanced Concepts',
        component: <RenderProp/>
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Reconciliation',
        category: 'Advanced Concepts',
        component: <Reconciliation/>
    },
    {
        id: 'advanced' + (COUNT++),
        title: 'Refs and the DOM',
        category: 'Advanced Concepts',
        component: <RefsDOM/>
    },

    {
        id: 'advanced' + (COUNT++),
        title: 'Strict Mode',
        category: 'Advanced Concepts',
        component: <StrictMode/>
    },

    {
        id: 'advanced' + (COUNT++),
        title: 'Suspense',
        category: 'Advanced Concepts',
        component: <SuspenseCmp/>
    },

    {
        id: 'hooks' + (COUNT++),
        title: 'useState',
        category: 'Hooks',
        component: <UseState/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useEffect',
        category: 'Hooks',
        component: <UseEffect/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useRef',
        category: 'Hooks',
        component: <UseRef/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useLayoutEffect',
        category: 'Hooks',
        component: <UseLayoutEffect/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useReducer',
        category: 'Hooks',
        component: <UseReducer/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useContext',
        category: 'Hooks',
        component: <UseContext/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useCallback',
        category: 'Hooks',
        component: <UseCallback/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useMemo',
        category: 'Hooks',
        component: <UseMemo/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useImperativeHandle',
        category: 'Hooks',
        component: <UseImperativeHandle/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useDeferred',
        category: 'Hooks',
        component: <UseDeferredValue/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useTransition',
        category: 'Hooks',
        component: <UseTransition/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useId',
        category: 'Hooks',
        component: <UseId/>
    },
    {
        id: 'hooks' + (COUNT++),
        title: 'useDebugValue',
        category: 'Hooks',
        component: <UseDebugValue/>
    },

]