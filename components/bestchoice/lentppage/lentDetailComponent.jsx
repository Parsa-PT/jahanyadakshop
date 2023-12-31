import React from "react";
import carBrakepad from "../../../public/assets/bestchoice/brakepad.jpeg";
import Image from "next/image";
import Card from "@/components/cardBlur/Card";
import pic1 from "../../../public/assets/bestchoice/Kempston-Brakes.jpg";
import pic2 from "../../../public/assets/bestchoice/brake-pads-1024x684.jpeg";
import pic3 from "../../../public/assets/bestchoice/seramicBrake.jpg";
import JahanYadakAlt from "../../../public/assets/jahanyadakImageAlt/jahanyadakImage.jpg";
import Link from "next/link";

const Data = [
  {
      id : 1,
      title : 'لنت ارگانیک',
      desc:'لنت‌های ارگانیک از جنس فیبر و رزین هستند. این لنت‌ها نرم‌اند و صدای زیادی به‌وجود نمی‌آورند. البته باید دقت کنید که خاکی که تولید می‌کنند زیاد است و فرسودگی آنها هم نسبتا سریع رخ می‌دهد..',
  },
  {
      id : 2,
      title : ' لنت فلزی و نیمه‌فلزی',
      desc:'لنت‌های فلزی و نیمه‌فلزی از انواع لنت ترمز هستند که دوام و قدرت زیادی دارند. انتقال گرما هم در آنها به شکلی موثر و عالی انجام می‌شود. مزیتی که لنت‌های فلزی و نیمه‌فلزی دارند، این است که برای بیشتر خودروها مناسب به‌شمار می‌آیند. لنتی که نیمه‌فلزی است، حدود ۳۰ تا ۶۰ درصد (شاید هم کمی بیشتر) فلز دارد. البته باید بدانید که این دسته از لنت‌ها یعنی فلزی‌ها و نیمه‌فلزی‌ها صدای زیادی تولید می‌کنند و اثراتی منفی روی روتر ترمز دارند؛ فرسودگی روتر از جمله نتایج حضور لنت‌های این‌مدلی است..',

  },
  {
      id : 3,
      title : 'لنت سرامیکی',
      desc:'بیشتر بخش‌های تشکیل‌دهنده لنت‌های سرامیکی از جنس فیبر مسی و سرامیک است. فیبر مسی موجود در لنت‌های این‌مدلی باعث هدایت گرما می‌شود و به ایجاد اصطکاک بیشتر کمک شایانی می‌کند. سروصدای لنت‌های سرامیکی بسیار اندک است و حتی می‌توان گفت که بیشتر مواقع، کاملا بی‌صدا هستند. گردوغبار کمی هم ایجاد می‌کنند و می‌توان از آنها در آب‌وهوای مختلف و شرایط رانندگی گوناگون (مثلا در مسیرها و جاده‌هایی با شرایط متنوع) بهره برد..',

  },
  {
      id : 4,
      title : 'لنت زینتری',
      desc:'لنت‌های زینتری مخصوص خودروهای مسابقه هستند. یعنی اگر خودرویی عادی دارید، نباید دور و بر این دسته از لنت‌ها آفتابی شوید چون به کارتان نمی‌آیند. به‌عبارت بهتر، اگر از لنت زینتری برای یک خودروی معمولی استفاده کنید، قدرت ترمزگرفتن‌تان پایین می‌آید. ناگفته نماند که عمر زینتری‌ها هم اندک است و زود دچار خردگی می‌شوند..',

  },

];
const Data2 = [
  {
    id : 1 ,
    title : 'نوع خودروی شما چیست و چه وزنی دارد؟',
    desc : 'هر نوع خودرویی لنت مخصوصی می‌طلبد. کافی است به دفترچه راهنمای خودرویتان نگاهی داشته باشید و در میان قطعات مختلف به‌دنبال نوع لنت مناسب بگردید. راه دیگری هم وجود دارد که کمی سخت است و برای اینکه از طریق آن بدانید لنت مناسب خودرویتان چیست، کمی به دید فنی و آشنایی با دنیای ماشین‌ها نیاز دارید. در این روش، باید چرخ‌ها را باز کنید و با مشاهده مستقیم، متوجه شوید که لنت‌تان چه شکل و مدلی است. فرقی نمی‌کند که مدل ماشین‌تان چیست، اگر لنت خوب و باکیفیتی برایش نخرید، در هنگام ترمزکردن کمی تا قسمتی به دردسر خواهید افتاد. درست است که قطعات باکیفیت‌تر هزینه بیشتری به همراه دارند اما در عوض، از بروز مشکلات و هزینه‌های سنگین بعدی جلوگیری می‌کنند. پس یک‌بار هزینه کنید و از نتایج خوبش تا مدت‌ها بهره ببرید؛ به این می‌گویند اقتصادی فکرکردن و عاقبت‌اندیشی. اگر خودرویی لوکس و گران سوار می‌شوید که حتما باید از قطعات اصل و باکیفیت استفاده کنید. مگر می‌شود از لنتی بد و بی‌کیفیت در کنار سیستمی استفاده شود که اصالت و مرغوبیت از آن می‌ریزد. قطعا نمی‌شود. ضمن اینکه اثر منفی یک قطعه بعد روی عملکرد سایر بخش‌ها هم بسیار زیاد خواهد بود.'
  },
  {
    id : 2,
    title : 'از چه مسیرهایی بیشتر تردد می‌کنید؟',
    desc : 'در انتخاب لنت ترمز به مسیرهایی دقت کنید که معمولا در آنها تردد دارید. مثلا اگر مسیرتان سربالایی دارد، باید به کوه و کمر بروید و گردنه‌ها را رد کنید یا اگر مدام در ترافیک هستید، نیاز به لنتی پرتوان دارید. لنت پرتوان چگونه است؟‌ لنتی که با داغ‌کردن، همچنان قدرت ترمزگیری داشته باشد، دچار فرسودگی زودهنگام نشود و بتوان رویش حساب کرد. البته اگر مسیرتان خیابان‌هایی هموار و بی‌حاشیه است؛ یعنی نه ترافیکی در مسیرتان وجود دارد و نه با سربالایی و سراشیبی‌های تند روبه‌رو هستید به سراغ لنت‌های معمولی‌تر هم می‌توانید بروید. مثلا لنت‌های نیمه‌فلزی برایتان کافی خواهند بود.'
  },
  {
    id : 2,
    title : 'آب‌وهوای محیطی که در آن رانندگی می‌کنید، چگونه است؟',
    desc : 'در شرایط آب‌وهوایی معمولی نیازی نیست که به انتخاب نوع لنتی خاص فکر کنید. اما اگر در جایی به‌شدت سردسیر یا گرم‌سیر زندگی می‌کنید، باید حواستان بیشتر به جنس لنت باشد. مثلا این را به‌خاطر بسپارید که لنت‌های نیمه‌فلزی در سرما خوب عمل نمی‌کنند و ترمزگیری با آنها دچار مشکل می‌شود یا لنت‌های ارگانیک نرم هستند و در هوای گرم، کارایی‌شان را از دست می‌دهند. اگر در شرایط آب‌وهوای خاصی زندگی می‌کنید(خیلی گرم یا خیلی سرد) از مکانیک‌های متخصص برای انتخاب بهترین لنت ترمز کمک بگیرید'
  },
  {
    id : 2,
    title : ' سیستم ترمز خودروی‌تان معمولی است یا سیستم abs دارید؟',
    desc : 'کسانی که خودرویی با سیستم abs دارند باید لنت‌های باکیفیت‌تری خریداری کنند. متاسفانه این نوع از خودروها لنت‌های آسیب‌پذیرتری دارند. ماجرا از این قرار است که در خودروهای معمولی لنت روی دیسک می‌چسبد و چرخ‌ها قفل می‌شوند. برای همین است که خوردگی لنت به تعویق می‌افتد و دیرتر خراب می‌شود. اما این داستان برای خودروهایی با سیستم abs رخ نمی‌دهد. در این خودروها در هر لحظه، لنت چندین و چندبار با دیسک در تماس قرار می‌گیرد و بعد آزاد می‌شود. از سوی دیگر، قفل‌شدن سیستم فرمان در زمان ترمزکردن هم در کار نیست. پس اگر خودرویی با ترمز abs دارید با کارشناسان مشورت کنید و لنتی باکیفیت مناسب بخرید. اکتفاکردن به لنت‌های معمولی فکر خوبی نیست.'
  },
  {
    id : 2,
    title : 'معمولا با چه سرعتی رانندگی می‌کنید؟',
    desc : 'از آن دسته رانندگانی هستید که به پدال گاز عشق می‌ورزند و با سرعت‌های بالا رانندگی می‌کنند؟ اگر این‌طور است باید بدانید که لنت‌های شما بیش از راننده‌های بااحتیاط داغ می‌کنند. داغ‌کردن لنت همان است و افزایش احتمال خوردگی و تخریب هم همان. پس راننده‌های سرعتی باید به‌سراغ خرید لنت‌های باکیفیتی بروند که کمتر داغ می‌کنند و اگر هم داغ شوند، زود خنک می‌شوند. در این صورت است که ترمزکردن و ایستادن به‌موقع خودرو ممکن می‌شود.'
  },
]

const RadiatorDetailComponent = () => {
  return (
    <div className=" font-lalezar">
      <div className=" bg-black fixed top-0 -z-50 w-full h-[14rem]"></div>
      <div className=" w-full  -z-10   ">
        <Image
          className=" bg-cover  fixed top-56 lg:top-48 xl:top-30 -z-50 bg-center  w-full  lg:h-[70rem]"
          src={carBrakepad}
        />

        <div className=" flex justify-center relative">
          <Card
            style={
              " shadow-cardShadow z-10 rounded-[20px] w-[15rem] md:w-[22rem]  lg:mt-[10rem]   backdrop-blur xl:w-[27rem] xl:h-[11rem]   overflow-hidden p-5 relative"
            }
          >
            <p className=" text-end md:text-2xl xl:text-3xl mb-2 lg:mb-5 text-white">
              بهترین لنت خودرو را چگونه انتخاب کنیم؟
            </p>
            <div className=" flex justify-between lg:text-lg">
            <span className=" text-white ">۱۴۰۲/۶/۱۰</span>
            <Link href='https://karnameh.com/blog/choose-best-car-engine-oil/#:~:text=%D8%A8%D8%B1%D8%A7%DB%8C%20%D9%85%D9%88%D8%AA%D9%88%D8%B1%D9%87%D8%A7%DB%8C%20%D8%AF%DB%8C%D8%B2%D9%84%DB%8C%20%D8%A8%D8%A7%DB%8C%D8%AF%20%D8%AD%D8%B1%D9%81,%D8%AF%D8%B1%20%D8%B3%D8%A7%D9%84%E2%80%8C%D9%87%D8%A7%DB%8C%20%D8%AE%D8%A7%D8%B5%DB%8C%20%D9%85%D9%86%D8%A7%D8%B3%D8%A8%20%D9%87%D8%B3%D8%AA%D9%86%D8%AF.'>
              <span className=" cursor-pointer  text-white"> karname : منبع</span>
            </Link>
            </div>
          </Card>

          <div className=" relative flex justify-center ">
            <span className=" w-[4.2rem] h-[4.2rem] md:w-[7.5rem] md:h-[7.5rem] absolute -bottom-5 right-52 lg:right-80  rounded-full  bg-[#b445ff]"></span>
            <span className=" w-[4.2rem] h-[4.2rem]  md:w-[6.5rem] md:h-[6.5rem] absolute -top-3 lg:top-32 -right-7 rounded-full bg-[#0AAFF5]"></span>
          </div>
        </div>
      </div>

      <div
        dir="rtl"
        className=" w-full flex justify-center items-center flex-col md:px-[10rem] p-3 bg-white dark:bg-slate-900   mt-[22rem]  lg:mt-[60rem] md:mt-[40rem]  z-20"
      >
        <div className=" mb-12">
          <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
            لنت ترمز چیست و چه می‌کند؟
          </h1>
          <p className=" lg:text-xl mb-7">
            لنت بخشی از سیستم ترمز هر خودروست. در هر خودرویی، شکل‌گیری نیروی
            اصطکاک باعث ایست و کاهش شتاب می‌شود. لنت همان قطعه‌ای است که کار
            شکل‌دهی نیروی اصطکاک را مقدور می‌کند. نیروی اصطکاک تولیدی از سوی
            لنت‌ها به‌کمک دیسک ترمز، باعث می‌شود که خودرو آرام‌تر حرکت کند یا
            کاملا بایستد. به‌عبارت دقیق‌تر، برای اصطکاک نیاز به سایش در سیستم
            ترمز وجود دارد و لنت‌ها این کار را به عهده می‌گیرند.
          </p>
          <p>
            لنت‌ها روی دیسک‌ها فشرده می‌شوند و سایش میان لنت و دیسک موجبات
            اصطکاک را فراهم می‌کند. اصطکاک هم می‌تواند باعث کاهش سرعت یا توقف
            کامل خودرو شود. در واقع، نیروی اصطکاکی که مدام از آن صحبت می‌شود به
            چرخ‌ها اِعمال می‌گردد و انرژی جنبشی موجود در آن را که از سوی موتور
            دریافت کرده به انرژی حرارتی بدل می‌کند. انرژی حرارتی هم در محیط پخش
            می‌شود و خودرو از جنش به ایستایی می‌رسد. پس همان‌طور که می‌دانید، در
            طول مدتی که با خودروی خود رانندگی می‌کنید، لنت‌ها به‌شدت در حال
            خدمت‌رسانی‌اند و همین باعث می‌شود که میزان استهلاک‌شان بالا برود.
          </p>
          <Image
            width={0}
            height={0}
            className=" lg:w-[40rem]"
            alt={JahanYadakAlt}
            src={pic1}
          />
        </div>

        <div>
          <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
            علت تعویض لنت ترمز چیست؟
          </h1>
          {/* <Image
            className=" mb-7"
            width={0}
            height={0}
            alt={JahanYadakAlt}
            src={oilpic2}
          /> */}
          <p className=" lg:text-xl mb-7">
            همان‌طور که گفته شد، از لنت ترمز برای توقف و کاهش شتاب استفاده
            می‌شود؛ این یعنی استهلاک مداوم. بدیهی است که بعد از فرسودگی زیاد
            نیاز به تعویض به‌میان می‌آید. باید تعویض لنت ترمز را جدی بگیرید چون
            هر چقدر که فرسودگی این قطعات بیشتر باشد، مدت‌زمان لازم برای توقف
            خودرو هم بالاتر می‌رود. قدرت ترمزها تاحد زیادی وابسته به همین
            لنت‌هاست.
          </p>
          <p>
            پس اگر لنت‌ها وضعیت مناسبی نداشته باشند، پدال ترمز هم به‌اندازه کافی
            سفت نخواهد بود یا پایین‌تر از جای همیشگی‌اش قرار می‌گیرد. در
            این‌صورت، به‌درستی عمل ترمزکردن را انجام نخواهید داد و ممکن است که
            دچار حادثه شوید. البته نمی‌توان گفت که عمر لنت‌ها برای هر خودرو
            دقیقا چقدر است. نوع خودرو، جایی که در آن معمولا خودرو را
            می‌رانید(آسفالت است، پرفراز و نشیب است؟) و شیوه رانندگی می‌تواند روی
            طول عمر لنت‌ها اثر بگذارد. از آب‌وهوا و تاثیرات آن روی سلامت لنت هم
            نمی‌توان غافل شد. با این حال، حسابی سرانگشتی با در نظرگرفتن عمر
            متوسط لنت‌های ترمز نشان می‌دهد که این قطعه در حدود ۸۰ هزار کیلومتر
            عمر می‌کند.
          </p>
        </div>

        <div>
          {/* <h3 className=" text-xl lg:text-[3rem] lg:mb-10 mb-5">
            روغن موتور معمولی
          </h3> */}
          {/* <Image
            width={0}
            height={0}
            className=" mb-7"
            alt={JahanYadakAlt}
            src={oilpic4}
          /> */}

          <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
            نکات مهمی که درباره لنت ترمز باید بدانید
          </h1>
          <p>
            برای اینکه وضعیت لنت ترمز را بررسی کنید و همه‌چیز تحت‌کنترل‌تان
            باشد، خوب است که هر ۱۵ هزار کیلومتر نگاهی به آن داشته باشید و به
            مکانیک مراجعه کنید. علائم و نشانه‌هایی که حکایت از نیاز به تعویض لنت
            ترمز دارند هم در ادامه مطرح شده است:
          </p>
          <p>
            – روشن‌شدن چراغ هشدار ترمز به شما می‌گوید که باید اوضاع ترمز و
            لنت‌ها را بررسی کنید.
          </p>
          <p>
            – اتمام لنت ترمز همراه با ایجاد صدایی در سیستم ترمز است. پس اگر
            صدایی می‌شنوید، احتمالا آهی از نهاد لنت‌ها بلند شده یا کاملا تمام
            شده‌اند.
          </p>
          <p>
            – اگر کل خودرو یا پدال ترمز به لرزش درمی‌آید هم نیاز به بررسی وضعیت
            لنت‌ها وجود دارد.
          </p>

          <Image
            width={0}
            height={0}
            className="mb-7"
            alt={JahanYadakAlt}
            src={pic2}
          />
        </div>

        <div>
          <h3 className=" text-xl lg:text-[3rem] lg:mb-10 mb-5">
            انواع لنت ترمز
          </h3>

          <ul>
            <li>لنت ارگانیک</li>
            <li> لنت فلزی و نیمه‌فلزی</li>
            <li>لنت سرامیکی</li>
            <li>لنت زینتری</li>
          </ul>



          <div>
            <h3>شرایط رانندگی</h3>
            <p>
              شرایط و سبک رانندگی در انتخاب جنس لنت ترمز اهمیت دارد. برای خرید
              لنت‌های جدید باید به مواد به‌کاررفته در آن توجه کنید. باید بدانید
              که لنت ترمز شما چه فشاری را قرار است تحمل کند. بهترین لنت ترمز
              برای خودروی شما به انتظارات شما از آن بستگی دارد. خود لنت‌ها را از
              مواد متفاوتی می‌سازند که این مواد در اثر اصطکاک تدریجا ساییده
              می‌شوند. میزان سایش مواد لنت به عوامل مختلفی بستگی دارد. مثلا ترمز
              ناگهانی و توقف‌های متوالی لنت ترمز را سریع‌تر می‌ساید. رانندگی در
              جاده‌های گل‌آلود و ناهموار نیز در تسریع خوردگی لنت ترمز موثر است.
            </p>
          </div>
        </div>

        <div>
          {Data.map((item) => {
            return (
              <div>
                <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
                  {item.title}
                </h1>
                <Image width={0} height={0} src={item.pic} />

                <p className=" lg:text-xl mb-7">{item.desc}</p>
                <p className=" lg:text-xl mb-7">{item.desc2}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h1>
          بهترین لنت ترمز چه ویژگی‌هایی دارد؟
          </h1>
          <p>
          بهترین لنت ترمز چه مشخصاتی دارد؟‌ می‌دانید؟ لنت‌ها باید در مقابل گرما و دمای بالا مقاومت خوبی داشته باشند. اگر بنا باشد که در مجاورت هوای گرم، لنت خاصیت خود را از دست بدهد، کلاه‌تان پس معرکه خواهد بود و باید مدام به‌دنبال تعویض باشید. اگر ضریب اصطکاک لنت‌ها بالا باشد هم مقاومت بهتری از خود نشان خواهند داد. درست است که لنت باید مقاوم باشد و ضریب اصطکاک خوبی از خود نشان بدهد اما لازم است که مواد سازنده آن نرمی کافی و مناسبی هم داشته باشند. اگر لنت به‌اندازه کافی نرم باشد، راحت‌تر روی دیسک می‌چسبد و ضمن اینکه سروصدای اندکی به‌وجود می‌آورد، عمرش بیشتر خواهد شد و گرد‌وغبار کمتری هم به آن می‌چسبد. در انتخاب بهترین لنت ترمز برای خودرو به نکات زیر هم توجه کنید:
          </p>
          <ul>
            <li>نوع خودروی شما چیست و چه وزنی دارد؟</li>
            <li>کاربرد خودروی برای شما چیست؟‌</li>
            <li>از چه مسیرهایی بیشتر تردد می‌کنید؟</li>
            <li>  آب‌وهوای محیطی که در آن رانندگی می‌کنید، چطور و چگونه است؟</li>
            <li> سیستم ترمز خودروی‌تان معمولی است یا سیستم abs دارید؟</li>
            <li>معمولا با چه سرعتی رانندگی می‌کنید؟</li>
            <li> خودرویی سنگین دارید یا معمولی؟</li>
          </ul>

          <Image src={pic3}/>
        </div>

        <div>
        {Data2.map((item) => {
            return (
              <div>
                <h1 className=" text-2xl lg:text-[3rem] lg:mb-10 mb-5">
                  {item.title}
                </h1>
             

                <p className=" lg:text-xl mb-7">{item.desc}</p>
               
              </div>
            );
          })}
        </div>

        <div>
          <h3>در آخر</h3>
          <p>
          شناخت قطعات مختلف خودرو از شما راننده بهتری می‌سازد. راننده بهتر چه کسی است؟‌ کسی است که می‌داند بخش‌ها و اجزای مختلف خودرو در حال انجام چه وظایفی هستند و چطور عمرشان بیشتر و بیشتر می‌شود. واقف‌بودن به این مسائل موجب احتیاط بیشتر در رانندگی است و ضمنا تسلطی برای راننده به‌همراه می‌آورد که مانع از سرزدن اشتباهات و خطاهایی جدی می‌شود. هوای لنت ترمز خودروی خود را داشته باشید و با رسیدگی به آن و توجه به نکاتی که گفته شد، هزینه‌ها و خرابی‌ها را به حداقل برسانید. اگر از اجزای داخلی خودرو سر دربیاورید، ناخودآگاه دقت و ظرافت بیشتری در رانندگی به‌خرج خواهید داد. این به نفع همه است؛ هم خودتان، هم خودروهای دیگر در مسیرهای مختلف و هم عابران و رهگذران.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RadiatorDetailComponent;
