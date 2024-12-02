import * as React from "react";
import { useForm } from "react-hook-form";
import './formhook.css'

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    submissionId,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm({
    defaultValues: {
      "yourname": "",
      "numberphone": "+375",
      "date": "",
      "vin": "",
      "comments": ""
    }
  });

  const onSubmit = (data) => console.log(JSON.stringify(data));

  if (submissionId) {
    return <p>Thank you! Submission Id: {submissionId}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inn">
            <div className="rectancgle"></div>
            
            <br />
        <h1 className="h1">Запись на сервис</h1>
    <div className="input-group">
      <div>
        <label>
          <span>Ваше имя</span>
          <input
            {...register("yourname")}
            type="text" className="form__field"
          />
        </label>
      </div>

      <div>
        <label>
          <span>Ваш номер телефона</span>
          <input
            {...register("numberphone")}
            type="text" className="form__field"
          />
        </label>
      </div>

      <div>
        <label>
          <span>Удобный день</span>
          <input
            {...register("date")}
            type="date" className="form__field"
          />
        </label>
      </div>

      <div>
        <label>
          <span>VIN - номер автомобиля</span>
          <input
            {...register("vin")}
            placeholder="VIN"
            type="text" className="form__field"
          />
        </label>
      </div>

      <div>
        <label>
          <span>Ваш комментарий</span>
          <input
            {...register("comments")}
            type="text" className="form__field"
          />
        </label>
      </div>

      
      </div><button disabled={isSubmitting}>Отправить</button>
      </div>
    </form>
  );
}
