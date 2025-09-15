import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Database, CheckCircle } from "lucide-react";

export const DataInitializer = () => {
  const [isImporting, setIsImporting] = useState(false);
  const [isImported, setIsImported] = useState(false);
  const { toast } = useToast();

  const handleImportData = async () => {
    setIsImporting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('import-medical-data');
      
      if (error) throw error;
      
      setIsImported(true);
      toast({
        title: "Success!",
        description: `Medical dataset imported successfully. ${data.recordsInserted} records added.`,
      });
    } catch (error) {
      console.error('Import error:', error);
      toast({
        title: "Import Failed",
        description: "Failed to import medical data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5" />
          Medical Dataset
        </CardTitle>
        <CardDescription>
          Initialize the medical Q&A database with sample healthcare data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleImportData}
          disabled={isImporting || isImported}
          className="w-full"
        >
          {isImporting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
          {isImported && <CheckCircle className="w-4 h-4 mr-2" />}
          {isImported ? "Data Imported Successfully" : "Import Medical Data"}
        </Button>
      </CardContent>
    </Card>
  );
};