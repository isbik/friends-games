"use client";

import React, { useState } from "react";
import { Pencil, RefreshCw, Eye, EyeOff, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Без труда не поймать рыбку из пруда",
  "Кот наплакал",
  "Тише едешь — дальше будешь",
  "Как с гуся вода",
  "Гол как сокол",
  "Комар носа не подточит",
  "Видит око, да зуб неймёт",
  "Как две капли воды",
  "Не в свои сани не садись",
  "Баба с возу — кобыле легче",
  "Достать до звезд",
  "Одна нога здесь, другая там",
  "Пальцем в небо",
  "Когда рак на горе свистнет",
  "Язык до Киева доведёт",
  "Сидеть на двух стульях",
  "Шило в мешке не утаишь",
  "Волка ноги кормят",
  "Бить баклуши",
  "Голову морочить",
  "Как корова языком слизала",
  "Делать из мухи слона",
  "Вертеться как белка в колесе",
  "Кот наплакал",
  "Чешуя отвалилась",
  "Ходить вокруг да около",
  "Руки не из того места",
  "Шапочное знакомство",
  "Прыгать выше головы",
  "Как селедка в бочке",
  "Пятое колесо в телеге",
  "Съесть собаку",
  "Курица не птица, Болгария не заграница",
  "Как рыба в воде",
  "Хватать звезды с неба",
  "Как от козла молока",
  "Плакать крокодильими слезами",
  "Караул устал",
  "Слон в посудной лавке",
  "Яблоко раздора",
  "Танцевать на граблях",
  "Чайник закипел",
  "Грести бабло лопатой",
  "Как медведь на ухо наступил",
  "Сесть в лужу",
  "Глаза разбегаются",
  "Шерше ля фам",
  "Скатертью дорога",
  "Душа в пятки ушла",
  "Не все коту масленица",
  "Выжать все соки",
  "Снег на голову",
  "Зарубить на носу",
  "Звезды не сошлись",
  "Кашу маслом не испортишь",
  "Кто не рискует, тот не пьет шампанского",
  "Яйцо курицу учит",
  "Из пушки по воробьям",
  "Кот из дома — мыши в пляс",
  "На воре шапка горит",
  "Где тонко, там и рвется",
  "Два сапога пара",
  "Как по маслу",
  "Сверкать пятками",
  "На все четыре стороны",
  "В ус не дует",
  "За семь верст киселя хлебать",
  "Кот ученый",
  "Ни рыба, ни мясо",
  "Чем дальше в лес, тем больше дров",
  "Водить за нос",
  "Как сыр в масле",
  "Съесть свой галстук",
  "Драть как Сидорову козу",
  "На рыбалке без червяка — как без рук",
  "Руки в ноги — и вперед!",
  "Накрутить на усы",
  "Из грязи в князи",
  "Волшебный пендель",
  "Найти иголку в стоге сена",
  "Петух клюнул в одно место",
  "Жаба душит",
  "Гроза в стакане воды",
  "Песок сыпется",
  "Не в бровь, а в глаз",
  "Бросить якорь",
  "Кто старое помянет, тому глаз вон",
  "Семь пятниц на неделе",
  "Одна голова хорошо, а две — лучше",
  "Вертеть хвостом",
  "Пальцы веером",
  "Танцевать под дудку",
  "Пух и прах",
  "Держать хвост пистолетом",
  "Слон и Моська",
  "Черепаха в гипсе",
  "Чешуя с глаз упала",
  "Бегать за двумя зайцами",
  "Почесать репу",
  "Кот в мешке",
  "Поймать синюю птицу",
  "Развести руками",
  "Слезть с печи",
  "Петь дифирамбы",
  "Жевать сопли",
  "Грызть гранит науки",
  "Ходить на ушах",
  "Водой не разольешь",
  "Потерять голову",
  "Куриный разум",
  "Чесать язык",
  "Не бросай камни в чужой огород",
  "Плясать под чужую дудку",
  "Как снег на голову",
  "Черт ногу сломит",
  "Заткнуть за пояс",
  "Лить из пустого в порожнее",
  "Втирать очки",
  "Прыгать как козел",
  "Слоняться без дела",
  "Заварить кашу",
  "Тянуть кота за хвост",
  "Вывести на чистую воду",
];

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [isWordVisible, setIsWordVisible] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [count, setCount] = useState(0);

  const [prev, setPrev] = useState<string[]>([]);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);

    const newWord = words[randomIndex];

    if (prev.includes(newWord) && prev.length === words.length) {
      getRandomWord();
      return;
    }

    setCurrentWord(newWord);
    setIsWordVisible(true);
    setIsGameStarted(true);
    setPrev((prev) => [...prev, newWord]);

    setCount((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 px-4 sm:px-8 pt-4 sm:pt-8"
    >
      <div className="max-w-lg w-full mx-auto flex flex-col gap-2 grow">
        <motion.div
          className="text-center mb-2"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Крокодил 🐊</h1>
          <p className="text-lg text-white/90">
            Покажи слово, пусть другие угадают!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-lg rounded-2xl p-5 border border-white/20"
        >
          <h3 className="text-lg font-bold text-white mb-3">Как играть:</h3>
          <ol className="space-y-2 text-white/90 list-decimal list-inside">
            <li>Нажмите "Начать Игру" для получения слова</li>
            <li>Нажмите "Показать" чтобы увидеть слово</li>
            <li>Объясните слово жестами, без слов</li>
            <li>Пусть другие игроки попробуют угадать</li>
            <li>Нажмите "Новое слово" для следующего раунда</li>
          </ol>
        </motion.div>

        <div className="mt-auto"></div>

        <motion.div
          layout
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-black/50 backdrop-blur-lg rounded-t-3xl p-6 border border-white/20"
        >
          <AnimatePresence mode="wait">
            {!isGameStarted ? (
              <motion.div
                key="start"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <motion.button
                  onClick={getRandomWord}
                  className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-4 rounded-2xl text-xl font-medium transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={24} />
                  Начать Игру
                </motion.button>
              </motion.div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWord}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isWordVisible ? 1 : 0,
                      height: isWordVisible ? "auto" : 0,
                    }}
                    exit={{ opacity: 0 }}
                    className="mb-6 pointer-events-none"
                  >
                    <p className="text-lg text-white/90">Всего слов: {count}</p>
                    <p className="text-4xl font-bold text-white">
                      {currentWord}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex gap-3 z-10">
                  <motion.button
                    onClick={() => setIsWordVisible(!isWordVisible)}
                    className="flex-1 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isWordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                    {isWordVisible ? "Скрыть" : "Показать"}
                  </motion.button>

                  <motion.button
                    onClick={getRandomWord}
                    className="flex-1 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RefreshCw size={20} />
                    Новое слово
                  </motion.button>
                </div>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
