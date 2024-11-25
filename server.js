import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto do meu gato",
    imagem: "https://placekitten.com/400/300",
  },
  {
    id: 2,
    descricao: "Paisagem incrível do fim de semana",
    imagem: "https://picsum.photos/id/237/400/300",
  },
  {
    id: 3,
    descricao: "Receita de bolo de chocolate",
    imagem: "https://source.unsplash.com/food/400x300",
  },
  {
    id: 4,
    descricao: "Meu novo setup de trabalho",
    imagem: "https://unsplash.com/photos/work-from-home-office",
  },
  {
    id: 5,
    descricao: "Citação inspiradora do dia",
    imagem: "https://loremflickr.com/400/300",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
