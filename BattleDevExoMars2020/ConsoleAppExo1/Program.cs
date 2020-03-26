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
            Dictionary<string, int> couleurs = new Dictionary<string, int>
            {
                { "jaune", 0 },
                { "rouge", 0 },
                { "violet", 0 },
                { "bleu", 0 },
                { "vert", 0 },
                { "orange", 0 },
                { "rose", 0 }
            };

            //while ((line = Console.ReadLine()) != string.Empty)
            //{
            //    couleurs[line.ToString()] += 1;
            //}
            while ((line = Console.ReadLine()) != null)
            {
                if (line.ToString() == "jaune")
                {
                    couleurs["jaune"] += 1;
                }
                if (line.ToString() == "rouge")
                {
                    couleurs["rouge"] += 1;
                }
                if (line.ToString() == "violet")
                {
                    couleurs["violet"] += 1;
                }
                if (line.ToString() == "bleu")
                {
                    couleurs["bleu"] += 1;
                }
                if (line.ToString() == "vert")
                {
                    couleurs["vert"] += 1;
                }
                if (line.ToString() == "orange")
                {
                    couleurs["orange"] += 1;
                }
                if (line.ToString() == "rose")
                {
                    couleurs["rose"] += 1;
                }
            }
            int i = 0;
            string reponse = "";
            foreach (KeyValuePair<string, int> color in couleurs.OrderByDescending(key => key.Value))
            {
                reponse += color.Key + " ";
                i++;
                if (i == 2)
                {
                    break;
                }
            }
            Console.WriteLine(reponse);
            // Vous pouvez aussi effectuer votre traitement ici après avoir lu toutes les données 
        }
    }
}