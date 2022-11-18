
namespace WebApplicationTestImport
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Text;
    using System.Web.Http;

    public class ProductsController : ApiController
    {
        [HttpPost]
        public ReturnResponse PostAssets(List<Asset> assets)
        {
            ReturnResponse returnResponse = null;
            try
            {
                string connection = System.Configuration.ConfigurationManager. ConnectionStrings["TestConnectionString"].ConnectionString;
                StringBuilder sb = new StringBuilder();
                foreach (var asset in assets)
                {
                    string sqlInsert =
                    @"INSERT INTO [dbo].[Asset]
                    ([AssetName]
                    ,[Model]
                    ,[Vendor]
                    ,[Description])
                    VALUES
                    (
                    N'" + asset.AssetName + "' ";
                    sqlInsert += "  ,N'" + asset.Model + "'";
                    sqlInsert += "  ,N'" + asset.Vendor + "'";
                    sqlInsert += "  ,N'" + asset.Description + "'";
                    sqlInsert += ")";

                    sb.Append(sqlInsert);
                }

                using (SqlConnection cn = new SqlConnection(connection))
                {
                    SqlCommand cmd = new SqlCommand(sb.ToString(), cn);
                    cn.Open();
                    int record = cmd.ExecuteNonQuery();
                    cn.Close();
                    if (record > 1)
                    {
                        returnResponse = new ReturnResponse()
                        {

                            status = 1,
                            returnMessage = "Saved Succesfully",
                        };
                    }
                    else
                    {
                        returnResponse = new ReturnResponse()
                        {
                            status = 0,
                            returnMessage = "no added fo any assset",
                        };
                    }
                }
                return returnResponse;
            }
            catch (Exception ex)
            {
                returnResponse = new ReturnResponse()
                {
                    status = 0,
                    returnMessage = ex.Message,
                };
                return returnResponse;
            } 
        }
    }

    public class Asset
    {
        public string AssetID { get; set; }
        public string AssetName { get; set; }
        public string Model { get; set; }
        public string Vendor { get; set; }
        public string Description { get; set; }
    }

   public class ReturnResponse
    {

        public int  status { get; set; }
        public string returnMessage { get; set; }

    }
}