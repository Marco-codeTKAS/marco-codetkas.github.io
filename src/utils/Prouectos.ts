interface Proyectos {
  title: string;
  body: string;
  technologies: Array<string>;
  image: Image,
  date:string,
  urlProyect:string
}
import facturacionImg from "../assets/images/Facturacion.png"
import mailingImg from "../assets/images/Mailing.png"
import noImage from "../assets/images/Facturacion.png"

interface Image {
  src:ImageMetadata,
  alt:string,
}
export const proyectos: Array<Proyectos> = [
  {
    title: "Sistema de manejo de multiples almacenes",
    body: `Este sistema fue mi primer proyecto exclusivo de frontend en donde me encargue de crear una WEBAPP que se encargue de la gestión del almacén de la empresa Gyv.
    Este sistema me dio la oportunidad de aprender la ultima version de VueJs. Utilizando y aprendiendo conceptos como los composable.`,
    technologies: ["Quasar framework ", "Vue3", ".NetCore6"],
    image:{
      src:facturacionImg,
      alt:""
    },
    date:"Octubre-2023",
    urlProyect:"#"
  },
  {
    title: "Sistema de creación de plantillas html",
    body: `Para este proyecto me fue solicitado un sistema que emulara un conocido sistema de mailing del mercado. Esto pensando en hacer una version mas simplificada pero que permita a la empresa crear sus propias campañas.
    De este sistema aprendí de una manera mas profunda la manera que tiene vue de manejar sus componentes y propiedades a profundidad.
    `,
    technologies: ["Quasar framework ", "VueJS", ".NetCore6"],
    image:{
      src:mailingImg,
      alt:""
    },
    date:"Enero-2023",
    urlProyect:"https://facturacion.iloxtelecom.com/mailsystem/Login"
  },
  {
    title: "Sistema de facturación Multiempresa",
    body: `En mi primera etapa, me encargue de la creación de un Sistema de Facturación, centrándome principalmente en el desarrollo frontend y un poco de backend. 
    Este sistema proporciona a los empleados de la empresa una para llevar a cabo diversas operaciones financieras.`,
    technologies: ["Quasar framework ", "VueJS", ".NetCore6"],
    image:{
      src:facturacionImg,
      alt:"Imagen de ejemplo extraída del proyecto Facturación.iloxtelecom.com"
    },
    date:"Septiembre-2022",
    urlProyect:"https://facturacion.iloxtelecom.com/adminfacturacion/Portal"
  },
];