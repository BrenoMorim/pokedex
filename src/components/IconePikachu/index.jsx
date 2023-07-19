import pikachu from "./pikachu.png";

export default function IconePikachu({tamanho = "grande"}) {
  const tamanhoEmPixels = tamanho === "grande" ? "5.25rem" : "3rem"; 
  const styles = {
    maxHeight: tamanhoEmPixels,
    maxWidth: tamanhoEmPixels,
    transform: "rotate(10deg)"
  };

  return (
    <img
      style={styles}
      src={pikachu}
      className="animate__animated animate__bounceInDown"
      alt="Foto do rosto do pikachu, extraído de um dos jogos"
    />
  );
}