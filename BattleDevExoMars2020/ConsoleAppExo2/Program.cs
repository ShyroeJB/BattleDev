using System;
using System.Collections.Generic;
using System.Linq;

/*******
 * Read input from Console
 * Use: Console.WriteLine to output your result to STDOUT.
 * Use: Console.Error.WriteLine to output debugging information to STDERR;
 *       
 * ***/

namespace CSharpContestProject
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            string line;
            int i = 0;
            var oldValue = "";
            List<int> serie = new List<int>();
            while ((line = Console.ReadLine()) != string.Empty)
            {
                var newValue = line.ToString();

                if (newValue.Equals(oldValue))
                {
                    i++;
                }
                else
                {
                    if (i != 0)
                    {
                        serie.Add(i);
                        i = 0;
                    }

                }
                oldValue = newValue;
            }
            serie.Sort();

            Console.WriteLine(serie[0]+1);
            // Vous pouvez aussi effectuer votre traitement ici après avoir lu toutes les données 
        }
    }
}