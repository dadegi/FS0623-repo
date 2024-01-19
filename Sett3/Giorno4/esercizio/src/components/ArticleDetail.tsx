import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Result } from '../interfaces/spaceflight'
import { Link } from 'react-router-dom'

type ArticleDetailParams = {
  articleId: string
}

const ArticleDetail = () => {
  const params = useParams<ArticleDetailParams>()

  const [articleDetails, setArticleDetails] = useState<Result | null>(null)

  useEffect(() => {
    getSingleArticle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getSingleArticle = async () => {
    try {
      let response = await fetch(
        'https://api.spaceflightnewsapi.net/v4/articles/' + params.articleId
      )
      if (response.ok) {
        let singleArticleDetails: Result = await response.json()
        setArticleDetails(singleArticleDetails)
      }
    } catch (e) {}
  }

  return (
    <Container>
      <Row>
        <Col>
          {articleDetails ? (
            <Card>
              <Link className="btn btn-primary mb-3" to={'/'}>Torna alla home</Link>
              <Card.Img variant="top" src={articleDetails.image_url} />
              <Card.Body>
                <Card.Title>{articleDetails.title}</Card.Title>
                <Card.Text>{articleDetails.summary}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <div>LOADING...</div>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ArticleDetail
