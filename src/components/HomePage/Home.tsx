import { INDEXDATA } from '../../shared/INDEXDATA';
import { CATEGORY, INDEXDATAITEM } from '../../shared/TYPES';
import './Home.css'

type AppProps  = {toggleShowHome: (id:string)=>void}

const Home = (props:AppProps) => {

    const {toggleShowHome} = props

    const Introduction : INDEXDATAITEM[] = INDEXDATA.filter(item=>item.category==='Introduction')
    const BasicConcepts : INDEXDATAITEM[] = INDEXDATA.filter(item=>item.category==='Basic Concepts')
    const AdvancedConcepts : INDEXDATAITEM[] = INDEXDATA.filter(item=>item.category==='Advanced Concepts')
    const Hooks : INDEXDATAITEM[] = [] = INDEXDATA.filter(item=>item.category==='Hooks')
    const APIOthers : INDEXDATAITEM[] = INDEXDATA.filter(item=>item.category==='API & Others')
    const Redux : INDEXDATAITEM[] = INDEXDATA.filter(item=>item.category==='Redux')

    const Section = (props:{categoryTitle:string,ArrayInput:INDEXDATAITEM[]}) => {
        const {categoryTitle,ArrayInput} = props
        return (
            <>
            <div className="lead home-title">{categoryTitle}</div>
            <div className="section-container">
                {ArrayInput.map((item)=>(
                    <div className="home-list-item" key={item.id+'home-page-list'} onClick={()=>{toggleShowHome(item.id)}}>{item.title}</div>
                ))}
            </div>
            </>
        )
    }

    return(
        <div className="home-container">
            <Section categoryTitle='Introduction' ArrayInput={Introduction}/>
            <Section categoryTitle='Basic Concepts' ArrayInput={BasicConcepts}/>
            <Section categoryTitle='Advanced Concepts' ArrayInput={AdvancedConcepts}/>
            <Section categoryTitle='Hooks' ArrayInput={Hooks}/>
            <Section categoryTitle='API & Others' ArrayInput={APIOthers}/>
            <Section categoryTitle='Redux' ArrayInput={Redux}/>
            <div className="src-code-container"><a href='https://github.com/phantom-5/rp' target='_blank'>Source Code</a></div>
        </div>
    )
}

export default Home