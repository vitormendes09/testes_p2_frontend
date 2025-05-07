import { ICurso } from "../contracts/entities/ICurso";

export default function CursoCard({ curso }: { curso: ICurso }) {
  return (
    <div className="border p-4 my-2 rounded">
      <h2 className="font-bold">{curso.nome}</h2>
      <ul>
        {curso.descricao.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}