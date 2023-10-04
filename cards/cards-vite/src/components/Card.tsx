interface ICardProps {
    img?: string,
    title: string,
    text: string,
    link: string
}

export default function Card({ ...props }: ICardProps) {
    const { title, text, link, img } = props;

    return (
        <>
            <div className="card">
                {img && <img src={img} className="card-img-top" alt={title} />}
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                    <a href={link} className="btn btn-primary">Continue...</a>
                </div>
            </div>
        </>
    )
}