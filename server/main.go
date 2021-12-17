package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
)

type Sign struct {
	Id     int
	Name   string
	Traits string
}

//   'Adventurous', 'Carefree', 'Brave', //Aries
//   'Stubborn', 'Whiny', 'Intense', //Taurus
//   'Bored', 'Self-reliant', 'Active', //Gemini
//   'Needy', 'Loving', 'Generous', //Cancer
//   'Proud', 'Happy', 'Free', //Leo
//   'Meticulous', 'Serious', 'Moody', //Virgo
//   'Playful', 'Lively', 'Upbeat', //Libra
//   'Passionate', 'Mysterious', 'Quiet', //Scorpio
//   'Curious', 'Restless', 'Creative', //Sagittarius
//   'Hardworking', 'Ambitious', 'Methodical', //Capricorn
//   'Smart', 'Witty', 'Interesting', //Aquarius
//   'Artistic', 'Emotional', 'Sensitive' //Pisces

// Return descriptions for calculated sign
var signs = []Sign{
	Sign{1, "Aries", ""},
	Sign{2, "Taurus", ""},
	Sign{3, "Gemini", ""},
	Sign{4, "Cancer", ""},
	Sign{5, "Leo", ""},
	Sign{6, "Virgo", ""},
	Sign{7, "Libra", ""},
	Sign{8, "Scorpio", ""},
	Sign{9, "Sagittarius", ""},
	Sign{10, "Capricorn", ""},
	Sign{11, "Aquarius", ""},
	Sign{12, "Pisces", ""},
}

func findSign(dateString string) (string, error) {

	const dateFormat = "01/02/2006"
	manageDate := dateString[:len(dateString)-4] //Remove this in the future
	manageDate += "2006"
	month := dateString[0:2]

	dateStamp, err := time.Parse(dateFormat, manageDate)

	if err != nil {
		return "error", err
	}

	fmt.Println("dateStamp", dateStamp.Format(dateFormat))

	sign := ""

	switch month {
	case "01":
		if dateStamp.Day() > 19 {
			sign = "Aquarius"
		} else {
			sign = "Capricorn"
		}
	case "02":
		if dateStamp.Day() > 18 {
			sign = "Pisces"
		} else {
			sign = "Aquarius"
		}
	case "03":
		if dateStamp.Day() > 20 {
			sign = "Aries"
		} else {
			sign = "Pisces"
		}
	case "04":
		if dateStamp.Day() > 19 {
			sign = "Taurus"
		} else {
			sign = "Aries"
		}
	case "05":
		if dateStamp.Day() > 20 {
			sign = "Gemini"
		} else {
			sign = "Taurus"
		}
	case "06":
		if dateStamp.Day() > 20 {
			sign = "Cancer"
		} else {
			sign = "Gemini"
		}
	case "07":
		if dateStamp.Day() > 22 {
			sign = "Leo"
		} else {
			sign = "Cancer"
		}
	case "08":
		if dateStamp.Day() > 22 {
			sign = "Virgo"
		} else {
			sign = "Leo"
		}
	case "09":
		if dateStamp.Day() > 22 {
			sign = "Libra"
		} else {
			sign = "Virgo"
		}
	case "10":
		if dateStamp.Day() > 22 {
			sign = "Scorpio"
		} else {
			sign = "Libra"
		}
	case "11":
		if dateStamp.Day() > 21 {
			sign = "Sagittarius"
		} else {
			sign = "Scorpio"
		}
	case "12":
		if dateStamp.Day() > 21 {
			sign = "Capricorn"
		} else {
			sign = "Sagittarius"
		}
	default:
		fmt.Println("Not a valid month")
	}

	// var signs = [
	// Aries 03/21 - 04/19
	// Taurus 04/20 - 05/20
	// Gemini 05/21 - 06/20
	// Cancer 06/21 - 07/22
	// Leo 07/23 - 08/22
	// Virgo 08/23 - 09/22
	// Libra 09/23 - 10/22
	// Scorpio 10/23 - 11/21
	// Sagittarius 11/22 - 12/21
	// Capricorn 12/22 - 01/19
	// Aquarius 01/20 - 02/18
	// Pisces 02/19 - 03/20
	// ];

	return sign, nil
}

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()
	config := cors.DefaultConfig()
	config.AddAllowHeaders("*")
	config.AllowAllOrigins = true

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./views", true)))

	// Setup route group for the API
	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "Successfully hit go backend",
			})
		})
	}

	api.GET("/api/results", calculateSign)

	// Start and run the server
	router.Run(":8080")
}

// Methods
func calculateSign(c *gin.Context) {
	fmt.Println("Params", c)

	bday := "06/25/1990" // Change to format MM/DD/YYYY
	sign, _ := findSign(bday)
	c.Header("Content-Type", "application/json")
	c.JSON(http.StatusOK, gin.H{
		"message": sign,
	})
}
