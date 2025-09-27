import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold">N</div>
            <div>
              <div className="font-semibold">Новое поколение</div>
              <div className="text-xs text-gray-500">Английский через языковые платформы</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#features" className="hover:text-indigo-600">Преимущества</a>
            <a href="#courses" className="hover:text-indigo-600">Курсы</a>
            <a href="#teachers" className="hover:text-indigo-600">Преподаватели</a>
            <a href="#pricing" className="hover:text-indigo-600">Цены</a>
            <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:opacity-95">Записаться</a>
          </nav>
          <button className="md:hidden p-2">☰</button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">"Новое поколение" — изучайте английский через современные языковые платформы</h1>
            <p className="mt-4 text-gray-600">Комбинированная методика: занятия с преподавателем + интерактивные платформы, индивидуальный трекинг прогресса и разговорная практика с носителями.</p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="bg-indigo-600 text-white px-5 py-3 rounded-lg shadow hover:opacity-95">Записаться на пробный урок</a>
              <a href="#courses" className="border border-indigo-600 text-indigo-600 px-5 py-3 rounded-lg">Посмотреть курсы</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="/assets/banner_kids.svg" alt="Ученики онлайн" className="w-full h-80 object-cover" />
          </div>
        </section>

        

<section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
  <img src="/assets/banner_kids.svg" alt="kids banner" className="w-full h-40 object-cover rounded-lg shadow" />
  <img src="/assets/banner_teens.svg" alt="teens banner" className="w-full h-40 object-cover rounded-lg shadow" />
  <img src="/assets/banner_adults.svg" alt="adults banner" className="w-full h-40 object-cover rounded-lg shadow" />
</section>

        <section id="courses" className="my-12">
          <h2 className="text-2xl font-bold">Наши курсы</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">Starter — базовый</div>
            <div className="bg-white p-6 rounded-2xl shadow">Communicator — разговорный</div>
            <div className="bg-white p-6 rounded-2xl shadow">Pro — подготовка</div>
          </div>
        </section>

        <section id="contact" className="my-12 bg-indigo-700 text-white rounded-2xl p-6">
          <h2 className="text-2xl font-bold">Записаться</h2>
          <form className="mt-6 grid md:grid-cols-3 gap-3">
            <input className="p-3 rounded-lg text-gray-800" placeholder="Имя" />
            <input className="p-3 rounded-lg text-gray-800" placeholder="Телефон или e-mail" />
            <select className="p-3 rounded-lg text-gray-800">
              <option>Выберите курс / уровень</option>
              <option>Starter</option>
              <option>Communicator</option>
              <option>Pro</option>
            </select>
            <textarea className="md:col-span-3 p-3 rounded-lg text-gray-800" rows={4} placeholder="Комментарий (необязательно)"></textarea>
            <div className="md:col-span-3 flex gap-3">
              <button type="button" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold">Отправить</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
