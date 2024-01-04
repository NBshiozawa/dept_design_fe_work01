import { BookItem } from './types'

export const Book = ({
  title,
  authors,
  description,
  publisher,
  imageLinks,
  previewLink,
}: BookItem['volumeInfo']): JSX.Element => {
  return (
    <>
      <li className="listitem">
        {imageLinks && (
          <div className="thumbnail">
            <img src={imageLinks.smallThumbnail} alt={title} />
          </div>
        )}
        <div className="rightblock">
          <h2 className="title">{title}</h2>
          {description && <p className="description">{description}</p>}
          {(authors || publisher) && (
            <div className="sub-info">
              {authors && <p>著者: {authors.join(`, `)}</p>}
              {publisher && <p>出版社: {publisher}</p>}
            </div>
          )}
          {previewLink && (
            <div className="preview-link-box">
              <a className="preview-link" href={previewLink} target="_blank">
                詳しく見る
              </a>
            </div>
          )}
        </div>
      </li>
    </>
  )
}
