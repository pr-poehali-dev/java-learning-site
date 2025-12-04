import CodeEditor from '@/components/CodeEditor';

const Practice = () => {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Редактор кода</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Пишите и тестируйте Java-код прямо в браузере. Решайте задачи и улучшайте свои навыки программирования
          </p>
        </div>
        <CodeEditor />
      </div>
    </div>
  );
};

export default Practice;
