import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Paginations.module.css';
import { Pagination } from 'react-bootstrap';

const Paginations = ({ data }) => {
  const { prev, start, end, next, pageno } = data;
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pageItem = [];
    for (let i = start; i <= end; i++) pageItem.push(i);
    setPages(pageItem);
  }, [start, end]);

  const move = (pageno) => navigate(`/?pageno=${pageno}`);

  return (
    <Pagination className={styles.paginations}>
      {prev > 0 && <Pagination.Item onClick={() => move(prev)}>이전으로</Pagination.Item>}
      {
        pages.map(i => (
          <Pagination.Item key={i} active={pageno === i} onClick={() => move(i)}>{i}</Pagination.Item>
        ))
      }
      {next > 0 && <Pagination.Item onClick={() => move(next)}>다음으로</Pagination.Item>}
    </Pagination>
  );
}

export default Paginations;