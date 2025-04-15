import ChordList from "@/components/ChordList";
import { Container, Title} from "@/components/shared";
import TopBar from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-5 p-4">
        <Title text="Аккорды" size="lg" className="font-extrabold font-mono" />
      </Container >
      <TopBar />
      <ChordList></ChordList>
    </>  
  );
}