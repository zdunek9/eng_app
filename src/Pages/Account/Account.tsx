import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "../../components/Modals/Loading/Loading";

import {
  Category,
  DetailsHighResolution,
  DetailsSmallScreen,
  Wrapper,
  SectionWrapper,
} from "./Account.style";
import Email from "./Email/Email";
import Password from "./Password/Password";

function Account() {
  const [categorySelect, setCategorySelect] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
console.log(modal);
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <DetailsSmallScreen>
        <Category>
          <div onClick={() => setCategorySelect(false)}>
            <p>Your Email</p>
          </div>
          <div onClick={() => setCategorySelect(true)}>
            <p>Password</p>
          </div>
        </Category>
        {!categorySelect && <Email setModal={setModal} />}
        {categorySelect && <Password />}
      </DetailsSmallScreen>
      <DetailsHighResolution>
        {modal && <Loading />}
        <SectionWrapper>
          <p>Your Email</p>
          <Email setModal={setModal} />
        </SectionWrapper>
        <SectionWrapper>
          <p>Your Password</p>
          <Password />
        </SectionWrapper>
      </DetailsHighResolution>
    </Wrapper>
  );
}

export default Account;
