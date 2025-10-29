import './App.css'
import Blogs from './components/Blogs';
import ChildA from './components/ChildA';
import Layout from './components/Layout';
import Wellcome from './components/Wellcome'

function App() {

  const blogs = [
    {
      id: 1,
      title: "React ilə performans optimizasiyası üçün 5 üsul",
      author: "Kanan Amirov",
      date: "2025-10-25",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      excerpt:
        "React layihənizin performansını artırmaq üçün memoization, lazy loading və code-splitting kimi üsullardan necə istifadə etməli olduğunuzu öyrənin.",
      content:
        "Bu məqalədə React tətbiqlərində performansın necə yaxşılaşdırılacağını addım-addım izah edirik. React.memo, useMemo, useCallback və React.lazy kimi üsullar vasitəsilə render sayını azaldaraq istifadəçi təcrübəsini optimallaşdıra bilərsiniz."
    },
    {
      id: 2,
      title: "Node.js ilə REST API qurarkən diqqət edilməli 7 məqam",
      author: "Leyla Həsənova",
      date: "2025-09-12",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
      excerpt:
        "Express framework istifadə edərək təhlükəsiz və miqyaslana bilən REST API-lər qurmaq üçün vacib praktikaları öyrənin.",
      content:
        "Middleware istifadəsi, error handling, environment dəyişənləri və JWT ilə authentication bu yazının əsas hissəsini təşkil edir. Məqsədiniz server performansını qoruyarkən təhlükəsiz API dizaynı yaratmaqdır."
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: Hansı zaman hansını seçməli?",
      author: "Rauf Abasbaylı",
      date: "2025-08-19",
      category: "CSS",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
      excerpt:
        "Layout yaratmaqda həm CSS Grid, həm də Flexbox güclüdür, amma fərqli məqsədlər üçün istifadə olunur. Hansı hallarda hansı daha effektivdir?",
      content:
        "Grid iki ölçülü layoutlar üçün idealdır, məsələn dashboard və ya kompleks səhifə strukturları. Flexbox isə tək sıra və ya sütunlu dizaynlar üçün daha çevikdir. Hər ikisinin birlikdə istifadəsi ən optimal yanaşmadır."
    },
    {
      id: 4,
      title: "Next.js 15-də yeniliklər: Server Actions, TurboPack və daha çox",
      author: "Narmin Bağırova",
      date: "2025-07-05",
      category: "Next.js",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      excerpt:
        "Next.js 15 versiyasında performans və developer təcrübəsini artıran yeni xüsusiyyətlərə nəzər salın.",
      content:
        "Server Actions, TurboPack build sistemi, metadata API və App Router təkmilləşdirmələri ilə Next.js artıq daha sürətli və çevikdir. Bu məqalə bu yenilikləri real nümunələrlə izah edir."
    }
  ];

  let username = 'Kanan'
  return (
    <div className='container mx-auto'>
      Hello, React Props!

      <hr />
      <ChildA username={username} />
      <hr />
      <Wellcome user={'Samir'} />
      <Wellcome user={'Mahir'} />
      <Wellcome user={'Rauf'} />
      <Wellcome />
      <Wellcome user={username} />

      <hr />

      <Blogs blogs={blogs} />

      <hr />


      <Layout>
        <h2>This is Layout Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      </Layout>

      <hr />

      <Layout>
        <h2>Another Layout Usage</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="" />
      </Layout>

    </div>
  )
}

export default App


// Props:// - Props (Properties) are used to pass data from a parent component to a child component in React.
// - Props are read-only, meaning that a child component cannot modify the props it receives from its parent.
// - Props allow for dynamic and reusable components by enabling the passing of different data to the same component structure.
// - Props can be of any data type, including strings, numbers, objects, arrays, and functions.
// - Props are accessed in a child component via the 'props' parameter or by destructuring the props object.



// function sayHi(username){
//   return `Hello, ${username}`;
// }

// console.log(sayHi('Samir'));
// console.log(sayHi('Mahir'));
