import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Article(props)
{
    return(
        <div>
            <Card style = {{
                width: "300px",
                marginBottom: "50px",
                minHeight: "300px"
            }}>
                <Card.Body>
                    <Card.Subtitle>{props.article.title}</Card.Subtitle>
                    <Card.Text>Posted by {props.article.author}</Card.Text>
                    <Card.Text>
                        {props.article.selftext.substr(0, 100)}
                    </Card.Text>
                    <Button variant="primary"><a style = {{color: "black"}} href = {props.article.url} target = "blank">Read More</a></Button>
                </Card.Body>
            </Card>
        </div>
    )
}