import { motion } from "framer-motion";
import { useState } from "react";

import { Category, Details, Wrapper } from "./Account.style";
import Email from "./Email/Email";
import Password from "./Password/Password";

function Account() {
  const [categorySelect, setCategorySelect] = useState<boolean>(false);
  return (
    <Wrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Category>
        <div onClick={() => setCategorySelect(false)}>Email</div>
        <div onClick={() => setCategorySelect(true)}>Password</div>
      </Category>
      <Details>
        {!categorySelect && <Email />}
        {categorySelect && <Password />}
      </Details>
    </Wrapper>
  );
}

export default Account;
