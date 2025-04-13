import { Container, Title, TopBar, Footer} from "@/components/shared";
import keyNotes from "@/data/keys";
import suffixes from "@/data/suffixes";

export default function Home() {
  return (
    <>
      <Container className="mt-5 p-4">
        <Title text="Аккорды" size="lg" className="font-extrabold font-mono" />
      </Container >
      <TopBar keys={keyNotes} suffixes={suffixes}></TopBar>
      <Footer/>
    </>
  );
}