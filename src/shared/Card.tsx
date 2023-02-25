import './card.css'
type AppProps = { title: string, subtext: string, description: string }
const Card = (props: AppProps) => {
    const { title, subtext, description } = props
    return (
        <div className="card-container">
            <div className="card-title">{title}</div>
            <div className="card-sub-text lead badge bg-light">{subtext}</div><br />

            <code className="card-description">
                <ul>
                    {description.split('. ').map((item, index) =>
                    {if(item.trim()){
                        return (
                            <li key={'item-lis-card' + index}>{item}</li>
                        )
                    }})}
                </ul></code>
        </div>
    )
}

export default Card