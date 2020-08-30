const express = require('express');
const qs = require('qs');
const router = express.Router();

// 인증 middleware가 완성되면 추가할 것 - 2020.08.25
router.get('/:id/writing', (req, res, next) => {
  const diaryBook = parseInt(req.params.id);
  const { author } = qs.parse(req.query);

  // writing page에 대한 정보를 db에 생성 - 2020.08.25
  db.query('INSERT INTO diary (diary_book_id, author) VALUE (?, ?)',
  [diaryBook, author],
  (err, result) => {
    if (err) {
      next(err);
    }
    res.status(200).json({ page: result.insertId });
  });
});

// 인증 middleware가 완성되면 추가할 것 - 2020.08.25
router.post('/:id/hand', (req, res, next) => {
  const diaryBook = parseInt(req.params.id);
  const { page, content } = req.body;

  // post로 content만을 받아 기존에 만들어둔 튜플에 추가
  db.query(`UPDATE diary SET content=? WHERE id=?`,
  [content, page],
  (err, result) => {
    if (err) {
      next(err);
    }
    // 자신이 작성한 내용이 기록된 페이지로 redirect
    res.status(302).redirect(`/diary/${diaryBook}/reading?page=${page}`);
  });
});

// 인증 middleware가 완성되면 추가할 것
router.get('/:id/reading', (req, res, next) => {
  const diaryBook = parseInt(req.params.id);
  let page = 1;  // page의 default 값을 1로 지정. query가 있을 경우 재할당을 위해 let으로 선언
  if (req.query.page) {
    page = parseInt(qs.parse(req.query).page);
  }

  // db에 저장되어 있는 정보를 읽어와 반환한다.
  db.query(`SELECT content FROM diary WHERE diary_book_id=? LIMIT ?, 1`,
  [diaryBook, page - 1],
  (err, result) => {
    if (err) {
      // SELECT query가 실패했다는 것은 튜플을 가져올 수 없다는 이야기이므로 404 에러 처리 - 2020/08/27
      err.status = 404;
      next(err);
    }
    // db에서 읽어온 정보를 반환
    res.status(200).json({ page: page, content: result[0]['content'] });
  });
});

module.exports = router;
