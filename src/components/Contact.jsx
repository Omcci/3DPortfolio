import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  // const formRef = useRef();
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setForm({ ...form, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       "service_l8nwy68",
  //       "template_fwm2gdw",
  //       {
  //         from_name: form.name,
  //         to_name: "Omar",
  //         from_email: form.email,
  //         to_email: "omelloulchi@gmail.com",
  //         message: form.message,
  //       },
  //       "VT6r6zvnhzLTI-ejc"
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Merci. Je reviendrais vers vous dés que possible.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.log(error);
  //         alert("Une erreur s'est produite.");
  //       }
  //     );
  // };

  return (
    <div className="xl:mt-12 xl:flex-row flex  gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="  bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Discutons</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Melloulchi.omar@gmail.com</p>
        <p className={styles.sectionSubText}>0670499728</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
