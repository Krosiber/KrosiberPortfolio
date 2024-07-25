import About from "../app/components/Home/About";
import Projelerim from "../app/components/Home/Projelerim";
import Word from "./components/Home/Word";
import Scroll from "../app/components/Home/Scroll";
import Header from "./components/Layout/Header";
import Footer from "../app/components/Layout/Footer/index"
import Loading from "./loading";
import { promises as fs } from 'fs';
import path from 'path';

interface Section {
  type: string;
  img: string;
}

interface ProjectData {
  title: string;
  net: string;
  resparoto: string;
  aerialvrtlpagesdev: string;
  sections: Section[];
}

interface AboutData {
  about: string;
  who: string;
  who2: string;
  who3: string;
  who4: string;
  img: string;
}

interface NavbarData {
  Anasayfa: string;
  Hakkımda: string;
  Projelerim: string;
  logo: string;
}

interface FooterData{
  title:string;
  WebDeveloper:string;
  SosyalMedya:string;
  Email:string;
  gmail:string;
}

interface Data {
  about: AboutData;
  navbar: NavbarData;
  footer:FooterData
  projects: ProjectData;
}

export default async function Home() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data: Data = JSON.parse(jsonData);

  if (!data) {
    return <Loading />
  }

  return (
    <>
      <Header 
        Anasayfa={data.navbar.Anasayfa}
        Hakkımda={data.navbar.Hakkımda}
        Projelerim={data.navbar.Projelerim}
        logo={data.navbar.logo} 
      />
      <main className="mt-[10rem]">
        <Scroll />
        <About
          about={data.about.about}
          who={data.about.who}
          who2={data.about.who2}
          who3={data.about.who3}
          who4={data.about.who4}
          img={data.about.img}
        />
        <Projelerim
          title={data.projects.title}
          net={data.projects.net}
          resparoto={data.projects.resparoto}
          aerialvrtlpagesdev={data.projects.aerialvrtlpagesdev}
          sections={data.projects.sections}
        />
        <Word />
      </main>
      <Footer 
        title={data.footer.title}
        WebDeveloper={data.footer.WebDeveloper}
        SosyalMedya={data.footer.SosyalMedya}
        Email={data.footer.Email}
        gmail={data.footer.gmail} 
      />
    </>
  );
}