import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CodeEditor = () => {
  const [code, setCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);
  
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput("Hello, World!\n\nProgram finished with exit code 0");
      setIsRunning(false);
    }, 1000);
  };

  const handleClearOutput = () => {
    setOutput("");
  };

  const tasks = [
    { title: "Сумма двух чисел", difficulty: "Легко" },
    { title: "Реверс строки", difficulty: "Легко" },
    { title: "Факториал числа", difficulty: "Средне" },
    { title: "Поиск простых чисел", difficulty: "Средне" }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="editor">Редактор</TabsTrigger>
          <TabsTrigger value="tasks">Задачи</TabsTrigger>
        </TabsList>
        
        <TabsContent value="editor" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Main.java</CardTitle>
              <div className="flex gap-2">
                <Button 
                  onClick={handleRunCode} 
                  disabled={isRunning}
                  size="sm"
                >
                  <Icon name={isRunning ? "Loader2" : "Play"} className={`mr-2 ${isRunning ? "animate-spin" : ""}`} size={16} />
                  {isRunning ? "Выполняется..." : "Запустить"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCode(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`)}
                >
                  <Icon name="RotateCcw" className="mr-2" size={16} />
                  Сбросить
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Editor
                height="400px"
                defaultLanguage="java"
                value={code}
                onChange={(value) => setCode(value || "")}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 16, bottom: 16 }
                }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Вывод программы</CardTitle>
              {output && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleClearOutput}
                >
                  <Icon name="X" className="mr-2" size={16} />
                  Очистить
                </Button>
              )}
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md min-h-[150px] font-mono text-sm overflow-auto">
                {output || "Нажмите 'Запустить' для выполнения кода"}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <Card key={index} className="hover:border-primary transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      task.difficulty === "Легко" 
                        ? "bg-green-500/20 text-green-400" 
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}>
                      {task.difficulty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="Code" className="mr-2" size={16} />
                    Решить задачу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CodeEditor;
