import React, { useEffect } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate } from "react-simple-captcha";

export const FormCaptcha = () => {
  useEffect(() => {
    loadCaptchaEnginge(6, "lightGrey");
  });

  return (
    <div className="mb-3">
      <div className="col mt-3">
        <LoadCanvasTemplate
          reloadText="Renovar Captcha"
          reloadColor="#5B6ED4"
        />
      </div>

      <div className="col mt-3">
        <div>
          <input
            placeholder="Ingresa el Captcha"
            id="user_captcha_input"
            name="user_captcha_input"
            type="text"
          ></input>
        </div>
      </div>
    </div>
  );
};
